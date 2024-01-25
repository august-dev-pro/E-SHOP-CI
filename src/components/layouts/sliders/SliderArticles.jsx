import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders-style.css";
import Product from "../../product/Product";
import { GetDataFonction } from "../../../fonctions/GetDataFonction";

const SliderArticles = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
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
  const ProductsData = GetDataFonction();
  return (
    <section className="article-slide-section">
      <Slider className="articles_slider" {...settings} dots={false}>
        {ProductsData.map((product) => (
          <article>
            <Product {...product} />
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default SliderArticles;
