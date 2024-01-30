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

export function limiterNomArticle(nomArticle, longueurLimite) {
  if (nomArticle.length > longueurLimite) {
    return nomArticle.substring(0, longueurLimite) + "...";
  }
  return nomArticle;
}

export function productSearch(word, products) {
  const searchWord = word.trim().toLowerCase();
  if (searchWord === "") {
    return [];
  }
  const results = products.filter((product) => {
    const productTitle = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    const searchWord = word.toLowerCase();

    return (
      productTitle.includes(searchWord) || description.includes(searchWord)
    );
  });

  return results;
}
