import {
  faFacebookF,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";
import Maker from "./Maker";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_content">
          <form action="" method="post" className="send_massage_form">
            <div className="form_title">envoyer un message ?</div>
            <div className="form_content">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  placeholder="monemail@gmail.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" required></textarea>
              </div>
              <button type="submit" className="submite">
                Envoyer un message
              </button>
            </div>
          </form>
          <div className="footer_content">
            <div className="about">
              <p className="description">
                <span>E-SHOP CI</span> est une PME reconnue sur les informations
                propriétaires : N°RCCM: CI-ABJ-2019-A-16027 / N°CC: 1926083A /
                N°CNPS: 347 344 / CEPICI N°: 003 0108 Spécialisée dans la vente
                de Smartphones, de tablettes et de matériels informatiques...
              </p>
              <div className="social_links">
                <div className="title">Nous suivre</div>
                <div className="links">
                  <a href="#" className="facebook">
                    <div className="icon">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="label">E-SHOP facebook</div>
                  </a>
                  <a href="#" className="instagram">
                    <div className="icon">
                      <FontAwesomeIcon icon={faSquareInstagram} />
                    </div>
                    <div className="label">E-SHOP instagram</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="about_info about_info-top">
              <div className="field">
                <div className="title">a propos de nous</div>
                <div className="links">
                  <a href="#">
                    <div className="label">qui sommes nous ?</div>
                  </a>
                  <a href="#">
                    <div className="label">s'inscrire</div>
                  </a>
                  <a href="#">
                    <div className="label">nos projets</div>
                  </a>
                </div>
              </div>
              <div className="field">
                <div className="title">nos ervices</div>
                <div className="links">
                  <a href="#">
                    <div className="label">qui sommes nous ?</div>
                  </a>
                  <a href="#">
                    <div className="label">nos partenariats</div>
                  </a>
                  <a href="#">
                    <div className="label">nous rejoindre</div>
                  </a>
                </div>
              </div>
              <div className="field">
                <div className="title">nos partenaires</div>
                <div className="links">
                  <a href="#">
                    <div className="label">partenaires officiels</div>
                  </a>
                  <a href="#">
                    <div className="label">confidentialité partenarial</div>
                  </a>
                  <a href="#">
                    <div className="label">devenir partenaire</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_info about_info-bottom">
          <div className="field">
            <div className="title">a propos de nous</div>
            <div className="links">
              <a href="#">
                <div className="label">qui sommes nous ?</div>
              </a>
              <a href="#">
                <div className="label">s'inscrire</div>
              </a>
              <a href="#">
                <div className="label">nos projets</div>
              </a>
            </div>
          </div>
          <div className="field">
            <div className="title">nos ervices</div>
            <div className="links">
              <a href="#">
                <div className="label">qui sommes nous ?</div>
              </a>
              <a href="#">
                <div className="label">nos partenariats</div>
              </a>
              <a href="#">
                <div className="label">nous rejoindre</div>
              </a>
            </div>
          </div>
          <div className="field">
            <div className="title">nos partenaires</div>
            <div className="links">
              <a href="#">
                <div className="label">partenaires officiels</div>
              </a>
              <a href="#">
                <div className="label">confidentialité partenarial</div>
              </a>
              <a href="#">
                <div className="label">devenir partenaire</div>
              </a>
            </div>
          </div>
        </div>
        <Maker />
      </div>
    </footer>
  );
};

export default Footer;
