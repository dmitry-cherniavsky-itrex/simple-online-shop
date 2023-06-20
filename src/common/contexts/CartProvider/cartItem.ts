import type {TProduct} from "../../../types/product";

export interface ICartItem extends TProduct {
    quantity: number;
}