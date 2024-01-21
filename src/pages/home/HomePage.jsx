import React from "react";
import NosBonsPlans from "../../components/articles/NosBonsPlans";
import Nouveautes from "../../components/articles/Nouveautes";
import Banner from "../../components/layouts/banner/Banner";
import "./homePage.css";
import Wrappers from "../../components/articles/Wrappers";
import Asides from "../../components/articles/Asides";
import Categories from "../../components/articles/Categories";

const HomePage = () => {
  return (
    <div className="home">
      <Banner />
      <NosBonsPlans />
      <Nouveautes />
      <div className="aside-block_wrapper-block">
        <div className="content_container container">
          <div className="aside-block">
            <Asides />
          </div>
          <div className="wrapper-block">
            <Wrappers />
          </div>
        </div>
      </div>
      <div className="categorie-slider">
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
