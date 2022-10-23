import React from "react";
import { Product as ProductType } from "../../Types/Product";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  console.log("product: %o", product);
  return <></>;
};
