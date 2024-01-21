import React from "react";
import CategoriesAside from "../layouts/asides/CategoriesAside";
import NosBonsPlansAside from "../layouts/asides/NosBonsPlansAside";
import NouveautesAside from "../layouts/asides/NouveautesAside";

const Asides = () => {
  return (
    <div className="asides">
      <div className="asides_container">
        <CategoriesAside />
        <NosBonsPlansAside />
        <NouveautesAside />
      </div>
    </div>
  );
};

export default Asides;
