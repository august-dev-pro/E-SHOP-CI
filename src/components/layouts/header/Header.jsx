import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { productSearch } from "../../../fonctions/productFonctions";
import SearchSucgestionsShow from "../../articles/SearchSucgestionsShow";
import "./header.css";
const Header = ({ updateSearchResults }) => {
  const handleScroll = () => {
    const flexAsideBar = document.getElementById("flex-aside-bar");
    const scrollAsideBar = document.getElementById("scroll-aside-bar");
    const flexNavBar = document.getElementById("flex-nav-bar");
    const scrollNavBar = document.getElementById("scroll-nav-bar");

    const boundingBox = flexNavBar.getBoundingClientRect();
    const isVisible =
      boundingBox.bottom > 0 && boundingBox.top < window.innerHeight;

    // Mettez à jour la classe de scroll-nav-bar en fonction de la visibilité
    if (flexNavBar && isVisible) {
      scrollNavBar.classList.add("hidden");
      scrollAsideBar.classList.add("hidden");
    } else {
      scrollNavBar.classList.remove("hidden");
      flexAsideBar.classList.add("hidden");
    }
  };

  /* mise a jour du aside bar */
  const handleToggleAsideBar = (value) => {
    const flexAsideBar = document.getElementById("flex-aside-bar");
    const scrollAsideBar = document.getElementById("scroll-aside-bar");

    if (value === 1) {
      scrollAsideBar.classList.add("hidden");
      flexAsideBar.classList.toggle("hidden");
    }

    if (value === 2) {
      flexAsideBar.classList.add("hidden");
      scrollAsideBar.classList.toggle("hidden");
    }
  };

  /* useEffect de recuperation de données API et mise a jour de bar de nav */
  useEffect(() => {
    //debut recuperer les données API
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
    //fin

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

  /* use effect de recuperation des resultat de recherche */
  useEffect(() => {
    const results = productSearch(searchTerm, products);
    setSearchResults(results);
  }, [searchTerm, products]);

  /* even d'ecoute de saisi de la zone de recherche */
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = productSearch(term, products);
    setSearchResults(results);
    if (updateSearchResults && typeof updateSearchResults === "function") {
    }
  };

  //vider le input
  const searchRef = useRef();
  const handleInputClear = () => {
    setSearchTerm("");
    searchRef.current.value = "";
  };

  return (
    <header id="header" className="header">
      <div className="bar">
        COMMANDEZ RAPIDEMENT AU 057 477 5889 || LIVRAISON EXPRESS LE MÊME JOUR !
      </div>

      <div className="header_content">
        <div className="content_container container">
          <div className="content">
            <a href="/" id="logo">
              E-SHOP CI
            </a>
            {/* search form */}
            <div className="search">
              <div className="search_form">
                <input
                  type="search"
                  name="search"
                  id="search"
                  required
                  placeholder="rechercher..."
                  ref={searchRef}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  id="submit"
                  onClick={() => {
                    updateSearchResults(searchResults);
                    handleInputClear();
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              {searchResults.length > 0 && (
                <SearchSucgestionsShow
                  setSearchTerm={setSearchTerm}
                  results={searchResults}
                />
              )}
            </div>
            <div className="acunt-links">
              <a href="#" id="accunt-link">
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
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

      {/* flex nav bar */}
      <nav id="flex-nav-bar" className="nav-bar">
        <div className="nav_container container">
          <a href="/" id="logo1">
            E-SHOP CI
          </a>
          <div className="menu-deroule">
            <div
              onClick={() => handleToggleAsideBar(1)}
              id="biblio flex-biblio"
              className="biblio"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="aside-bar hidden" id="flex-aside-bar">
              <div className="aside-bar_container">
                <div className="aside-bar_content">
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories </span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories lorem</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories lorem ipsum</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories lorem</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
      {/* scroll nav bar */}
      <nav id="scroll-nav-bar" className="nav-bar">
        <div className="nav_container container">
          <a href="/" id="logo1">
            E-SHOP CI
          </a>
          {/* scroll bar menu deroule */}
          <div className="menu-deroule">
            <div onClick={() => handleToggleAsideBar(2)} className=" biblio">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="aside-bar hidden" id="scroll-aside-bar">
              <div className="aside-bar_container">
                <div className="aside-bar_content">
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories </span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories lorem</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories ipsum</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories lorem</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories</span>
                    </div>
                  </a>
                  <a href="#" className="chield">
                    <div className="ch_container">
                      <span>categories</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
