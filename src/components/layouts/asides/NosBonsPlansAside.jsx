import React from "react";
import "./asides-style.css";
import { GetDataFonction } from "../../../fonctions/GetDataFonction";
import { limiterNomArticle } from "../../../fonctions/limiterNomArticle";
const NosBonsPlansAside = () => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 5);
  return (
    <aside className="nosbonplans_aside aside aside2">
      <div className="aside_header">Nos Bons Plans</div>
      <div className="aside_content">
        {limitedProducts.map((element) => {
          return (
            <a href="#" className="chield">
              <artcile className="aside_article">
                <div className="article_img">
                  <img src={element.image} alt="" />
                </div>
                <div className="article_des">
                  <div className="name">
                    {limiterNomArticle(element.title, 20)}
                  </div>
                  <div className="price">{element.price} FCFA</div>
                </div>
              </artcile>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default NosBonsPlansAside;
