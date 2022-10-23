import React from "react";
import { Product as ProductType } from "../../Types/Product";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        {product?.images?.length > 0 && (
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        )}
      </div>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.title}</p>
    </div>
  );
};
