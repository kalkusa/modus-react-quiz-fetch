/* eslint-disable-next-line no-use-before-define */
import React, { useEffect, useState } from "react";
import { ProductList } from "./Components/ProductList/ProductList";
import { Product } from "./Types/Product";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data as Product[]);
        setLoading(false);
      });
  }, []);

  const firstFiveProducts = products.slice(0, 5);

  return <ProductList products={firstFiveProducts} loading={loading} />;
}
