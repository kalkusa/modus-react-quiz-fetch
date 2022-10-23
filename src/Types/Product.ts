import { ProductVariant } from "./ProductVariant";

export type Product = {
    category: string;
    description: string;
    id: string;
    images: string[];
    price: number;
    tags: string[];
    title: string;
    variants: ProductVariant[]
}