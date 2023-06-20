import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {useCart} from "../../common/contexts/CartProvider/CartContext";
import {ICartItem} from "../../common/contexts/CartProvider/cartItem";
import {CartActionType} from "../../common/contexts/CartProvider/cartActions";

import {CheckoutContainer, EmptyMessage, OrderItem, OrderItemsList} from "./Checkout.styles";
import {FormGroup} from "../../common/components/form/FormGroup/FormGroup.style";
import {Input} from "../../common/components/form/Input/Input";
import {Button} from "../../common/components/form/Buttons/Buttons.styles";

export const Checkout = () => {
    const [state, dispatch] = useCart();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const emailRegex = /^\S+@\S+\.\S+$/;
    const navigate = useNavigate();

    const removeOrderItem = (item: ICartItem) => {
        dispatch({type: CartActionType.REMOVE, item});
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleConfirm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (emailRegex.test(email)) {
            navigate('/confirmation', {state: {email}});
        } else {
            setError('Email address is not valid');
        }
    };

    return (
        <>
            <Link to="/">&larr; GO BACK</Link>
            <CheckoutContainer>
                <h2>Check your order details</h2>

                {state.items.length ? (
                    <>
                        <OrderItemsList>
                            {state.items.map((item) =>
                                <OrderItem key={item.id}>
                                    <span>{item.title}</span>
                                    <span>{item.quantity} x ${item.price}</span>
                                    <button
                                        onClick={() => removeOrderItem(item)}
                                        title="Remove"
                                    >&#xfbe;</button>
                                </OrderItem>
                            )}
                            <OrderItem>
                                <strong>Total: </strong>
                                <strong>${state.totalCost}</strong>
                            </OrderItem>
                        </OrderItemsList>
                        <form onSubmit={handleConfirm}>
                            <FormGroup>
                                <Input
                                    value={email}
                                    type="email"
                                    placeholder="Enter your email..."
                                    error={error}
                                    onChange={handleChange}
                                ></Input>
                                <Button>Confirm</Button>
                            </FormGroup>
                        </form>
                    </>
                ) : (
                    <EmptyMessage>Shopping cart is empty</EmptyMessage>
                )}
            </CheckoutContainer>
        </>

    );
};