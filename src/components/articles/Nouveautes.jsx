import React, { useEffect, useState } from "react";
//import CategoriesNavSlider from "../layouts/sliders/CategoriesNavSlider";
import SliderArticles from "../layouts/sliders/SliderArticles";
import Product from "../product/Product";
import "./articles-section-style.css";
const Nouveautes = () => {
  return (
    <section className="news_section">
      <div className="news_container container">
        <div className="news_content">
          {/* <CategoriesNavSlider /> */}
          <div className="section_tile">Nouveautées de chez nous</div>
          <div className="news_articles">
            <SliderArticles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
