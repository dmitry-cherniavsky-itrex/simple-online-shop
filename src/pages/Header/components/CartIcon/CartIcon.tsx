import React from "react";

import {CartIconContainer} from "./CartIcon.styles";
import {useCart} from "../../../../common/contexts/CartProvider/CartContext";
import {CartActionType} from "../../../../common/contexts/CartProvider/cartActions";

export const CartIcon : React.FC = () => {
    const [state, dispatch] = useCart();

    const toggleCart = () => {
        dispatch({type: CartActionType.TOGGLE_CART});
    };

    return (
        <CartIconContainer onClick={toggleCart}>
            {state.counter}
        </CartIconContainer>
    )
};