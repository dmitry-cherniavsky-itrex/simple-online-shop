import React from "react";
import {useNavigate} from "react-router-dom";

import {useCart} from "../../../../common/contexts/CartProvider/CartContext";
import {CartItem} from "../CartItem/CartItem";
import {CartActionType} from "../../../../common/contexts/CartProvider/cartActions";

import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";
import {CartDropdownContainer, CartItemsContainer, EmptyPlaceholder} from './CartDropdown.styles';

export const CartDropdown : React.FC = () => {
    const [state, dispatch] = useCart();
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        dispatch({type: CartActionType.TOGGLE_CART});
    };

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {state.items.length ? (
                    state.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <EmptyPlaceholder>Cart is empty</EmptyPlaceholder>
                )}
            </CartItemsContainer>
            {!!state.items.length &&
                <Button
                    onClick={goToCheckoutHandler}
                > GO TO CHECKOUT </Button>
            }
        </CartDropdownContainer>
    );
}