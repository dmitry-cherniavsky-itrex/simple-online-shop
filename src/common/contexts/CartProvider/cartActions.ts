import {TProduct} from "../../../types/product";
import {ICartItem} from "./cartItem";

export type CartAction =
    | { type: 'ADD'; item: TProduct }
    | { type: 'REMOVE'; item: ICartItem }
    | { type: 'TOGGLE_CART' }
