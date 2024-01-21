import {
  faGithubSquare,
  faGoogle,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Maker = () => {
  return (
    <div className="section_maker">
      <div className="container">
        <div className="content">
          <div className="title">
            © 2024 | Augustin Selete +225 057 477 588 9
          </div>
          <div className="contact_link">
            <a href="https://github.com/august-dev-pro/" className="chield">
              <div className="icon">
                <FontAwesomeIcon icon={faGithubSquare} />
              </div>
              <div className="label">august-dev-pro</div>
            </a>
            <a href="#" className="chield">
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="label">augustin selete</div>
            </a>
            <a href="#" className="chield">
              <div className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="label">augustinselete01@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maker;
