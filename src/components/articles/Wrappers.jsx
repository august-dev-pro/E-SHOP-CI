import React from "react";
import AccessoiresEnfant from "./AccessoiresEnfant";

const Wrappers = ({ openModal }) => {
  return (
    <section className="wrapper-section">
      <div className="wrapper_section_content">
        <AccessoiresEnfant openModal={openModal} />
        <AccessoiresEnfant openModal={openModal} />
      </div>
    </section>
  );
};

export default Wrappers;
