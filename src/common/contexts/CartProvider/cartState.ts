import type {ICartItem} from './cartItem';

export interface ICartState {
    items: ICartItem[];
    counter: number;
    totalCost:  number;
}