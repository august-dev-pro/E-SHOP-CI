import { useEffect, useState } from "react";

export const GetDataFonction = () => {
  const [ProductsData, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);
  return ProductsData;
};
