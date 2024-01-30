import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
const ProductDetailPopup = ({ product, closeModal }) => {
  if (!product || Object.keys(product).length === 0) {
    return null; // ou un message de chargement
  }
  return (
    <article className="articlePop-up">
      <div onClick={closeModal} className="close-modal">
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="popup_container">
        <div className="popup_content">
          <div className="image">
            <div className="img-content">
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="description_container">
            <div className="description_content">
              <div className="name">{product.title}</div>
              <div className="description">{product.description}</div>
              <div className="price-add">
                <div className="price">{product.price}00 FCFA</div>
                <button className="add-button">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetailPopup;
