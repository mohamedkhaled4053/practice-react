import { useState, useEffect } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setLoading(false);
    };
    getProducts();
  }, [url]);

  return { products, loading };
}
