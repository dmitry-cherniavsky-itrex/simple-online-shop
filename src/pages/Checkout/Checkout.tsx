import React, {useState} from "react";
import {Link} from "react-router-dom";

import {useCart} from "../../common/contexts/CartProvider/CartContext";
import {ICartItem} from "../../common/contexts/CartProvider/cartItem";
import {CartActionType} from "../../common/contexts/CartProvider/cartActions";

import {CheckoutContainer, EmptyMessage, OrderItem, OrderItemsList} from "./Checkout.styles";
import {FormGroup} from "../../common/components/form/FormGroup/FormGroup.style";
import Input from "../../common/components/form/Input/Input";
import {Button} from "../../common/components/form/Buttons/Buttons.styles";

export const Checkout : React.FC = () => {
    const [state, dispatch] = useCart();
    const [error, setError] = useState('');

    const removeOrderItem = (item: ICartItem) => {
        dispatch({type: CartActionType.REMOVE, item});
    }

    return (
        <>
            <Link to="/">&larr; GO BACK</Link>
            <CheckoutContainer>
                <h2>Check your order details</h2>

                {state.items.length ? (
                    <>
                        <OrderItemsList>
                            {state.items.map((item) =>
                                <OrderItem>
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
                        <form>
                            <FormGroup>
                                <Input type="email" placeholder="Enter your email..." error={error}></Input>
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