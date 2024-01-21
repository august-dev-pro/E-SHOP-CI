import React from "react";
import { GetDataFonction } from "../../../fonctions/GetDataFonction";
import { limiterNomArticle } from "../../../fonctions/limiterNomArticle";
import "./asides-style.css";
const NouveautesAside = () => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 5);
  return (
    <aside className="nouveautes_aside aside aside2">
      <div className="aside_header">Nouveauté</div>
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

export default NouveautesAside;
