import React, { useEffect, useState } from "react";
import { GetDataFonction } from "../../fonctions/GetDataFonction";
import Product from "../product/Product";

const NosBonsPlans = () => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 8);
  return (
    <section className="nosBonPlan_section">
      <div className="nosBonPlan_container container">
        <div className="section_tile">Nos Bons Plans</div>
        <div className="nosBonPlan_content">
          {limitedProducts.map((product) => {
            {
              return <Product {...product} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};
export default NosBonsPlans;
