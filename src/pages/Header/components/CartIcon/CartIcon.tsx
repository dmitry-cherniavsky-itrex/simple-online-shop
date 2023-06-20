import React from "react";

import {CartIconContainer} from "./CartIcon.styles";
import {useCart} from "../../../../common/contexts/CartProvider/CartContext";

type TCardIconProps = {
    toggleCart: () => void;
}

export const CartIcon = ({ toggleCart }: TCardIconProps) => {
    const [state] = useCart();

    return (
        <CartIconContainer onClick={toggleCart}>
            {state.counter}
        </CartIconContainer>
    )
};