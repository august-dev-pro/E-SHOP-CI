import {
  faLockOpen,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { productSearch } from "../../../fonctions/productFonctions";
import "./header.css";
const Header = ({ updateSearchResults }) => {
  const handleScroll = () => {
    const flexNavBar = document.getElementById("flex-nav-bar");
    const scrollNavBar = document.getElementById("scroll-nav-bar");

    const boundingBox = flexNavBar.getBoundingClientRect();
    const isVisible =
      boundingBox.bottom > 0 && boundingBox.top < window.innerHeight;

    // Mettez à jour la classe de scroll-nav-bar en fonction de la visibilité
    if (flexNavBar && isVisible) {
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = productSearch(searchTerm, products);
    setSearchResults(results);
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = productSearch(term, products);
    setSearchResults(results);
    if (updateSearchResults && typeof updateSearchResults === "function") {
      updateSearchResults(results);
    }
  };

  return (
    <header className="header">
      <div className="bar">
        COMMANDEZ RAPIDEMENT AU 07 09 49 84 28 || LIVRAISON EXPRESS LE MÊME JOUR
        !
      </div>
      <div className="header_content">
        <div className="content_container container">
          <div className="content">
            <a href="/" id="logo">
              E-SHOP CI
            </a>
            <div className="search_form">
              <input
                type="search"
                name="search"
                id="search"
                required
                placeholder="rechercher..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button id="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="acunt-links">
              <a href="#" id="accunt-link">
                <div className="icon">
                  <FontAwesomeIcon icon={faLockOpen} />
                </div>
                <span>connexion</span>
              </a>
              <div className="panier">
                <div className="icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
                <div className="total_price">FCFA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="flex-nav-bar" className="nav-bar">
        <div className="nav_container container">
          <a href="/" id="logo1">
            E-SHOP CI
          </a>
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
          <a href="/" id="logo1">
            E-SHOP CI
          </a>
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
