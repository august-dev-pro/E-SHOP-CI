import React from "react";
import "../layouts/header/header.css";
const SearchSucgestionsShow = ({ results, setSearchTerm }) => {
  return (
    <div className="succgestions_show-modale">
      <div className="modale_container">
        <div className="modale_content">
          {results.map((result) => {
            return (
              <div
                onClick={() => {
                  setSearchTerm(result.category);
                }}
                className="succgest"
              >
                <span>{result.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchSucgestionsShow;
