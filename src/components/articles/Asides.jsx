import React from "react";
import CategoriesAside from "../layouts/asides/CategoriesAside";
import NosBonsPlansAside from "../layouts/asides/NosBonsPlansAside";
import NouveautesAside from "../layouts/asides/NouveautesAside";

const Asides = ({ openModal }) => {
  return (
    <div className="asides">
      <div className="asides_container">
        <CategoriesAside />
        <NosBonsPlansAside openModal={openModal} />
        <NouveautesAside openModal={openModal} />
      </div>
    </div>
  );
};

export default Asides;
