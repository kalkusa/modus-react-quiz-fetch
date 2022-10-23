import React from "react";
import { Product as ProductType } from "../../Types/Product";
import { Product } from "../Product/Product";

interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};
