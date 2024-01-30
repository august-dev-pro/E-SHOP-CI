import React, { useState } from "react";
import NosBonsPlans from "../../components/articles/NosBonsPlans";
import Nouveautes from "../../components/articles/Nouveautes";
import Banner from "../../components/layouts/banner/Banner";
import "./homePage.css";
import Wrappers from "../../components/articles/Wrappers";
import Asides from "../../components/articles/Asides";
import Categories from "../../components/articles/Categories";
import ProductDetailPopup from "../../components/product/ProductDetailPopup";

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fonction pour ouvrir le modal avec les détails du produit
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };
  return (
    <div className="home">
      <Banner />
      <NosBonsPlans openModal={openModal} />
      <Nouveautes openModal={openModal} />
      <div className="aside-block_wrapper-block">
        <div className="content_container container">
          <div className="aside-block">
            <Asides />
          </div>
          <div className="wrapper-block">
            <Wrappers openModal={openModal} />
          </div>
        </div>
      </div>
      <div className="categorie-slider">
        <Categories />
      </div>

      {isModalOpen && (
        <ProductDetailPopup product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};

export default HomePage;
