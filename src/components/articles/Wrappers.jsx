import React from "react";
import CategoriesAside from "../layouts/asides/CategoriesAside";
import CategoriesNavSlider from "../layouts/sliders/CategoriesNavSlider";
import AccessoiresEnfant from "./AccessoiresEnfant";
import NosBonsPlans from "./NosBonsPlans";
import Nouveautes from "./Nouveautes";

const Wrappers = () => {
  return (
    <section className="wrapper-section">
      <div className="wrapper_section_content">
        <AccessoiresEnfant />
        <AccessoiresEnfant />
      </div>
    </section>
  );
};

export default Wrappers;
