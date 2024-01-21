import React from "react";
import "./asides-style.css";
const CategoriesAside = () => {
  return (
    <aside className="categories_aside aside">
      <div className="aside_header">acceuil</div>
      <div className="aside_content">
        <a href="#" className="chield">
          <div className="title">tablettes</div>
        </a>
        <a href="#" className="chield">
          <div className="title">informatique</div>
        </a>
        <a href="#" className="chield">
          <div className="title">electronique</div>
        </a>
        <a href="#" className="chield">
          <div className="title">mode</div>
        </a>
        <a href="#" className="chield">
          <div className="title">accessoires</div>
        </a>
        <a href="#" className="chield">
          <div className="title">accessoires</div>
        </a>

        <a href="#" className="chield">
          <div className="title">accessoires pour enfants</div>
        </a>
        <a href="#" className="chield">
          <div className="title">equipements proffessionnels</div>
        </a>
        <a href="#" className="chield">
          <div className="title">jeux et divertissements</div>
        </a>
        <a href="#" className="chield">
          <div className="title">bons plans</div>
        </a>
      </div>
    </aside>
  );
};

export default CategoriesAside;
