import { Currency } from "./product";

export interface CartInterface {
    name: string;
    image: string;
    currency: Currency;
    price:  number;
    quantity: number;
}