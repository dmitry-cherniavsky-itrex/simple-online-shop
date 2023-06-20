import type {ICartItem} from './cartItem';

export interface CartState {
    items: ICartItem[];
    isCartShown: boolean;
    counter: number;
}