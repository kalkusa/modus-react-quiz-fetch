import React from "react";
import { Product as ProductType } from "../../Types/Product";
import { Product } from "../Product/Product";

interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: ProductType) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
