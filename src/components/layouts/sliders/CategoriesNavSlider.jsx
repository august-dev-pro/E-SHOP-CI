import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders-style.css";
import { GetDataFonction } from "../../../fonctions/GetDataFonction";

const CategoriesNavSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let ProductsData = GetDataFonction();
  ProductsData = ProductsData.slice(0, 17);
  return (
    <section className="categories-slider">
      <Slider {...settings} dots={false}>
        {ProductsData.map((marque) => (
          <div className="category-slide">
            <div className="image_container">
              <img src={`../../../../images/marque/${marque.id}.jpg`} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CategoriesNavSlider;
