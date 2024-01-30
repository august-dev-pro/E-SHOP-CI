import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GetDataFonction } from "../../fonctions/GetDataFonction";
import { limiterNomArticle } from "../../fonctions/limiterNomArticle";
import "./product.css";

const Product = ({ id, title, price, image, openModal }) => {
  const products = GetDataFonction();
  const handleOpenModal = () => {
    const selectedProduct = products.find((product) => product.id === id);
    // Appel de la fonction pour ouvrir le modal dans HomePage avec les détails du produit
    openModal(selectedProduct);
  };
  return (
    <article className="article">
      <div className="image">
        <div onClick={handleOpenModal} className="img-content">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="descriptions">
        <div onClick={handleOpenModal} className="article_name">
          {limiterNomArticle(title, 25)}
        </div>
        <div className="price-detail">
          <div className="price">{price} FCFA</div>
          <button className="detailPopup">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
