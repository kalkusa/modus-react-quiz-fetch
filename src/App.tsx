/* eslint-disable-next-line no-use-before-define */
import React, { useEffect, useState } from "react";
import { ProductList } from "./Components/ProductList/ProductList";
import { Product } from "./Types/Product";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((response) => response.json())
      .then(
        (data) => {
          setProducts(data as Product[]);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setProducts([]);
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  if (error) {
    return (
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          An error ocurred during fetching data from the server
        </div>
      </div>
    );
  }

  const firstFiveProducts = products.slice(0, 5);

  return <ProductList products={firstFiveProducts} loading={loading} />;
}
