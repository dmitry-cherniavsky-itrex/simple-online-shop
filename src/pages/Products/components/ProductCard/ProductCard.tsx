import React from "react";
import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";

import type {TProduct} from "../../../../types/product";

import {ProductCardContainer, ProductInfo, ProductNamePrice, ProductDescription} from "./ProductCard.styles";
import {useCart} from "../../../../common/contexts/CartProvider/CartContext";

interface IProductCardProps {
    product: TProduct
}

export const ProductCard: React.FC<IProductCardProps> = ({product}) => {
    const {title, price, description, thumbnail} = product;
    const [, dispatch] = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD', item: product});
    };

    return (
        <ProductCardContainer>
            <img src={thumbnail} alt={`${title}`}/>
            <ProductInfo>
                <ProductNamePrice>
                    <span>{title}</span>
                    <span>${price}</span>
                </ProductNamePrice>
                <ProductDescription>{description}</ProductDescription>
                <Button onClick={addToCart}>Add to card</Button>
            </ProductInfo>
        </ProductCardContainer>
    )
}