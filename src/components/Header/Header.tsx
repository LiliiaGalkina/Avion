import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";

const Header = () => {
const [isSearchBlock, setIsSearchBlock] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

const cart = useAppSelector((state) => state.products.cart);





    return (
      <header className="header">
        <div className="container">
          <div className="header__up">
            <div className="header__search search">
              <button
                className="search__img"
                title="Click to search"
                onClick={() => setIsSearchBlock(!isSearchBlock)}
                style={{
                  opacity: isSearchBlock ? 0 : 1,
                  zIndex: isSearchBlock ? 1 : 2,
                }}
              >
                <img src="/image/header/search.svg" alt="loupe icon" />
              </button>
              <div
                className="search__block"
                style={{
                  visibility: isSearchBlock ? "visible" : "hidden",
                  zIndex: isSearchBlock ? 2 : 1,
                }}
              >
                <input
                  type="text"
                  name="search-text"
                  className="search__input"
                  placeholder="search"
                />
                <button
                  className="search__btn"
                  onClick={() => setIsSearchBlock(!isSearchBlock)}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="header__logo">Avion</div>
            <div className="header__info">
              <Link to={"/cart"} id="cart" className="header__cart">
                <img src="/image/header/cart.svg" alt="cart icon" />
                <span className="header__cart-count">
                  {cart.length > 0 ? cart.length : ""}
                </span>
              </Link>
              <button
                className="header__user"
                title="The function is not implemented"
              >
                <img src="/image/header/user.svg" alt="user icon" />
              </button>
            </div>
          </div>
          <nav className="header__menu menu">
            <div
              className={isMenuOpen ? "menu__burger_active" : "menu__burger"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
            <ul className={isMenuOpen ? "menu__list_active" : "menu__list"}>
              <li className="menu__item">
                <Link
                  to={"/"}
                  className="menu__link"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to={"/about"}
                  className="menu__link"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  About us
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to={"/catalog"}
                  className="menu__link"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Сatalog
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to={"/contacts"}
                  className="menu__link"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Сontacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;