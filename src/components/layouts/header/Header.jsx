import {
  faSearchengin,
  faShopware,
  faSquarespace,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./header.css";
const Header = () => {
  const handleScroll = () => {
    const flexNavBar = document.getElementById("flex-nav-bar");
    const scrollNavBar = document.getElementById("scroll-nav-bar");

    const boundingBox = flexNavBar.getBoundingClientRect();
    const isVisible =
      boundingBox.bottom > 0 && boundingBox.top < window.innerHeight;

    // Mettez à jour la classe de scroll-nav-bar en fonction de la visibilité
    if (isVisible) {
      scrollNavBar.classList.add("hidden");
    } else {
      scrollNavBar.classList.remove("hidden");
    }
  };

  useEffect(() => {
    // Ajoutez l'écouteur d'événements sur le scroll
    window.addEventListener("scroll", handleScroll);

    // Retirez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <div className="bar">
        COMMANDEZ RAPIDEMENT AU 07 09 49 84 28 || LIVRAISON EXPRESS LE MÊME JOUR
        !
      </div>
      <div className="header_content">
        <div className="content_container container">
          <div className="content">
            <div id="logo">august-dev-pro</div>
            <form action="post" className="search_form">
              <input
                type="search"
                name="search"
                id="search"
                required
                placeholder="rechercher"
              />
              <button type="submit" id="submit">
                <FontAwesomeIcon icon={faSearchengin} />
              </button>
            </form>
            <div className="acunt-links">
              <a href="#" id="accunt-link">
                <div className="icon">
                  <FontAwesomeIcon icon={faSquarespace} />
                </div>
                <span>connexion</span>
              </a>
              <div className="panier">
                <div className="icon">
                  <FontAwesomeIcon icon={faShopware} />
                </div>
                <div className="total_price">FCFA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="flex-nav-bar" className="nav-bar">
        <div className="nav_container container">
          <div className="biblio">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="links">
            <div className="chield">
              <a href="#">
                <span>telephones</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>tablettes</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>informatique</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>electronique</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>modes</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>accessoires</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav id="scroll-nav-bar" className="nav-bar">
        <div className="nav_container container">
          <div className="biblio">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="links">
            <div className="chield">
              <a href="#">
                <span>telephones</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>tablettes</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>informatique</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>electronique</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>modes</span>
              </a>
            </div>
            <div className="chield">
              <a href="#">
                <span>accessoires</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
