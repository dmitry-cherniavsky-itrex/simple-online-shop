import type {ICartItem} from './cartItem';

export interface ICartState {
    items: ICartItem[];
    isCartShown: boolean;
    counter: number;
}