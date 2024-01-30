import React from "react";
import { GetDataFonction } from "../../fonctions/productFonctions";
import Product from "../product/Product";

const NosBonsPlans = ({ openModal }) => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 8);
  return (
    <section className="nosBonPlan_section">
      <div className="nosBonPlan_container container">
        <div className="section_tile">Nos Bons Plans</div>
        <div className="nosBonPlan_content">
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
export default NosBonsPlans;
