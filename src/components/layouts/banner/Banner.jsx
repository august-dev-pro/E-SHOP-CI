import React from "react";
import "./banner.css";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerData from "./bannerData";

const Banner = () => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
  }));
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4500,
  };
  return (
    <section className="banner_section">
      <Slider className="slider" {...settings}>
        {bannerData.map((element) => {
          const imageUrl = `../../../../images/${element.image}`;
          return (
            <div className="slide">
              <img id="img" src={imageUrl} alt="" />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
