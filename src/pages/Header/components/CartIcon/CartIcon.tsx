import React from "react";

import {CartIconContainer} from "./CartIcon.styles";
import {useCart} from "../../../../common/contexts/CartProvider/CartContext";

export const CartIcon : React.FC = () => {
    const [state, dispatch] = useCart();

    const toggleCart = () => {
        dispatch({type: "TOGGLE_CART"});
    };

    return (
        <CartIconContainer onClick={toggleCart}>
            {state.counter}
        </CartIconContainer>
    )
};