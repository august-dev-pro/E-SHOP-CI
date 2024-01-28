import React from "react";
import { GetDataFonction } from "../../fonctions/GetDataFonction";
import Product from "../product/Product";

const AccessoiresEnfant = () => {
  const ProductsData = GetDataFonction();
  const limitedProducts = ProductsData.slice(0, 8);
  return (
    <section className="accessoires-enfant_section">
      <div className="accessoires_container">
        <div className="section_tile">Accessoires Enfant</div>
        <div className="accessoires_content content">
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
export default AccessoiresEnfant;
