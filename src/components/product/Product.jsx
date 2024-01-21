import React from "react";
import { limiterNomArticle } from "../../fonctions/limiterNomArticle";
import "./product.css";

const Product = ({ id, title, price, image }) => {
  return (
    <a href={`/product/${id}`}>
      <article className="article">
        <div className="image">
          <div className="img-content">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="descriptions">
          <div className="article_name">{limiterNomArticle(title, 25)}</div>
          <div className="price-detail">
            <div className="price">{price} FCFA</div>
            <button> Détails </button>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Product;
