import React from "react";
//import CategoriesNavSlider from "../layouts/sliders/CategoriesNavSlider";
import SliderArticles from "../layouts/sliders/SliderArticles";
import "./articles-section-style.css";
const Nouveautes = ({ openModal }) => {
  return (
    <section className="news_section">
      <div className="news_container container">
        <div className="news_content">
          {/* <CategoriesNavSlider /> */}
          <div className="section_tile">Nouveautées de chez nous</div>
          <div className="news_articles">
            <SliderArticles openModal={openModal} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nouveautes;
