import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  GetDataFonction,
  limiterNomArticle,
} from "../../fonctions/productFonctions";

const ShowProduct = () => {
  const { productId } = useParams();
  const products = GetDataFonction();
  const productData = products.find(
    (product) => product.id === parseInt(productId)
  );

  const succgestions = products.filter((product) => {
    const succgestCat = product.category.toLowerCase();
    const succgestchWord = productData.category.toLowerCase();
    return succgestCat.includes(succgestchWord);
  });

  const [productNumber, setProductNumber] = useState(1);
  const handleProductNum = (event) => {
    const number = event.target.value;
    setProductNumber(number);
  };

  return productData ? (
    <section className="showProduct-section">
      <div className="container">
        <div className="content">
          <article className="product">
            <div className="product_container">
              <div className="product_content">
                <div className="image">
                  <div className="product_image">
                    <div className="image_container">
                      <img src={productData.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="desc_container ">
                  <div className="description-content">
                    <div className="product_description">
                      <div className="name">{productData.title}</div>
                      <div className="prices">
                        <div className="price">{productData.price} 00 FCFA</div>
                        <del className="reduice-price">
                          {productData.price} 000 FCFA
                        </del>
                      </div>
                      <div className="description">
                        {productData.description}
                      </div>
                    </div>
                    <div className="star-add_cart">
                      <div className="star">
                        {Array.from(
                          { length: Math.round(productData.rating.rate) },
                          (_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              style={{ color: "gold" }}
                            />
                          )
                        )}
                        ({productData.rating.count} reviews)
                      </div>
                      <input
                        type="number"
                        value={productNumber}
                        name="number"
                        id="number"
                        onChange={handleProductNum}
                      />
                      <button className="add-cart">
                        <span>Acheter</span>
                        <FontAwesomeIcon icon={faCartPlus} />
                      </button>
                    </div>
                  </div>
                  <div className="images">
                    <div className="field">
                      <img src={productData.image} alt="" />
                    </div>
                    <div className="field">
                      <img src={productData.image} alt="" />
                    </div>
                    <div className="field">
                      <img src={productData.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className="succges_aside">
            <div className="succges_aside_container">
              <div className="content">
                {succgestions.map((succgestion) => {
                  return (
                    <div className="chield">
                      <div className="succges_container">
                        <div className="succges_content">
                          <div className="image">
                            <img src={succgestion.image} alt="" />
                          </div>
                          <div className="name">
                            {limiterNomArticle(succgestion.title, 18)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="showProduct-section">Produit non trouver</div>
  );
};

export default ShowProduct;
