import React from "react";
import { Product as ProductType } from "../../Types/Product";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { Product } from "../Product/Product";

interface ProductListProps {
  products: ProductType[];
  loading: boolean;
}

export const ProductList = ({ products, loading }: ProductListProps) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-2xl font-bold tracking-tight text-gray-900">No products found</div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">First 5 products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: ProductType) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
