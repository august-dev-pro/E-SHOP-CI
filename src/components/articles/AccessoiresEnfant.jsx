import React from "react";
import { GetDataFonction } from "../../fonctions/productFonctions";
import Product from "../product/Product";

const AccessoiresEnfant = ({ openModal }) => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 8);
  return (
    <section className="accessoires-enfant_section">
      <div className="accessoires_container">
        <div className="section_tile">Accessoires Enfant</div>
        <div className="accessoires_content content">
          {limitedProducts.map((product) => {
            {
              return <Product {...product} openModal={openModal} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};
export default AccessoiresEnfant;
