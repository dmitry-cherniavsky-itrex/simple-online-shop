import {TProduct} from "../../../types/product";
import {ICartItem} from "./cartItem";

export enum CartActionType {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

export type TCartAction =
    | { type: CartActionType.ADD; item: TProduct }
    | { type: CartActionType.REMOVE; item: ICartItem }
