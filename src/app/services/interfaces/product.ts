export enum Currency {
    USD = "USD",
    EUR = "EUR",
}

export interface ProductInterface {
    name: string;
    image: string;
    currency: Currency;
    price: number;
    tax: number;
    description: string;
}

export interface MisProductosStatus {
  isActiveToggleEditProduct: boolean;
  isActiveToggleCreateProduct: boolean;
}

export type ProductCardInterface = Pick<ProductInterface, "name" | "image" | "price">;