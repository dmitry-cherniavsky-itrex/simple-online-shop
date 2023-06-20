import {Link, useLocation, useNavigate} from "react-router-dom";

import {ConfirmationContainer} from "./Confirmation.styles";
import {useEffect} from "react";
import {useCart} from "../../common/contexts/CartProvider/CartContext";
import {CartActionType} from "../../common/contexts/CartProvider/cartActions";

export const Confirmation = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [, dispatch] = useCart();

    useEffect(() => {
        if (state && state.email) {
            dispatch({type: CartActionType.RESET});
        } else {
            navigate('/', );
        }
    }, [])

    return (
        <ConfirmationContainer>
          <h1>Thank you!</h1>
          <h2>Your order is confirmed.</h2>
          <Link to='/'>Continue shopping</Link>
        </ConfirmationContainer>
    );
};