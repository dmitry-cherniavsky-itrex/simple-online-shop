import React, {useReducer, createContext, useContext} from 'react';
import {CartState} from './cartState';
import {CartAction} from './cartActions';
import {TProviderProps} from "../types";

const initialCartState: CartState = {
    items: [],
    isCartShown: false,
    counter: 0
};

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD':
            // If item already exists in cart, increase quantity
            const newCounter = state.counter + 1;
            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

            if (existingItemIndex !== -1) {
                const newItems = [...state.items];

                newItems[existingItemIndex] = {
                    ...action.item,
                    quantity: newItems[existingItemIndex].quantity + 1
                }

                return {
                    ...state,
                    items: newItems,
                    counter: newCounter
                };
            }
            // Else add a new item
            return {
                ...state,
                items: [
                    ...state.items,
                    {...action.item, quantity: 1}
                ],
                counter: newCounter
            };

        case 'REMOVE':
            // Filter out the item with the given id
            const newItems = state.items.filter(item => item.id !== action.item.id);
            return {
                ...state,
                items: newItems,
                counter: state.counter - action.item.quantity
            };

        case 'TOGGLE_CART':
            return {...state, isCartShown: !state.isCartShown};

        default:
            return state;
    }
}

export const CartContext = createContext<[CartState, React.Dispatch<CartAction>] | undefined>(undefined);

export const CartProvider : React.FC <TProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}