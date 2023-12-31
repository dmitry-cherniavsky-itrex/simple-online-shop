import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";

import type {TProduct} from "../../../../types/product";

import {ProductCardContainer, ProductInfo, ProductNamePrice, ProductDescription} from "./ProductCard.styles";
import {useCart} from "../../../../common/contexts/CartProvider/CartContext";
import {CartActionType} from "../../../../common/contexts/CartProvider/cartActions";

interface IProductCardProps {
    product: TProduct
}

export const ProductCard = ({product} : IProductCardProps) => {
    const {title, price, description, thumbnail} = product;
    const [, dispatch] = useCart();

    const addToCart = () => {
        dispatch({type: CartActionType.ADD, item: product});
    };

    return (
        <ProductCardContainer>
            <img src={thumbnail} alt={title}/>
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