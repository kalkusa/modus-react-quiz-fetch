import React from "react";
import { Product as ProductType } from "../../Types/Product";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <>
      <div>Product title: {product.title}</div>
      {product.images.length > 0 && <img src={product.images[0]} width={400} />}
    </>
  );
};
