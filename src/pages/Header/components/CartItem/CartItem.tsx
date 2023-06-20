import React from "react";
import {ICartItem} from "../../../../common/contexts/CartProvider/cartItem";

import {CartItemContainer, ItemDetails} from "./CartItem.styles";

interface ICartItemProps {
    item : ICartItem
}

export const CartItem = ({item} : ICartItemProps) => {
    const {title, thumbnail, price, quantity} = item;

    return (
        <CartItemContainer>
            <img src={thumbnail} alt={title}/>
            <ItemDetails>
                <strong>{title}</strong>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};