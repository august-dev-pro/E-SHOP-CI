import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Product from "../product/Product";
import "./articles-section-style.css";
const SearchResultatsShow = ({ resultats, openModal }) => {
  return (
    <section className="search_resultat-section section">
      <div className="search_resultat_container container">
        <div className="search_resultat_content content">
          <div className="search_resultat_section_title section_tile">
            <span>Resultats de la recherche</span>
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </div>
          <div className="search_resultat">
            {resultats.map((result) => (
              <Product {...result} openModal={openModal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultatsShow;
