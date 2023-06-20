import React from "react";
import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";

import type {TProduct} from "../../../../types/product";

import {ProductCardContainer} from "./ProductCard.styles";

interface IProductCardProps {
    product: TProduct
}

export const ProductCard: React.FC<IProductCardProps> = ({product}) => {
    const {title, price, description, thumbnail} = product;

    const addToCart = () => {

    };

    return (
        <ProductCardContainer>
            <img src={thumbnail} alt={`${title}`}/>
            <div className="product-info">
                <div className="product-name-price">
                    <span>{title}</span>
                    <span>${price}</span>
                </div>
                <div className="description">{description}</div>
                <Button onClick={() => addToCart()}>Add to card</Button>
            </div>
        </ProductCardContainer>
    )
}