import {useNavigate} from "react-router-dom";

import {useCart} from "../../../../common/contexts/CartProvider/CartContext";
import {CartItem} from "../CartItem/CartItem";

import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";
import {CartDropdownContainer, CartItemsContainer, EmptyPlaceholder} from './CartDropdown.styles';

type TCardDropdownProps = {
    onClose: () => void;
}

export const CartDropdown = ({ onClose }: TCardDropdownProps) => {
    const [state] = useCart();
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
        onClose();
    };

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {state.items.map((item) => (
                    <CartItem key={item.id} item={item}/>
                ))}

                {state.items.length === 0 && (
                    <EmptyPlaceholder>Cart is empty</EmptyPlaceholder>
                )}
            </CartItemsContainer>

            {!!state.items.length && (
                <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
            )}
        </CartDropdownContainer>
    );
}
