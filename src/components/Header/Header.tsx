import { useState } from "react";

const Header = () => {
const [isSearchBlock, setIsSearchBlock] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
      <header className="header">
        <div className="container">
          <div className="header__up">
            <div className="header__search search">
              <button
                className="search__img"
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
                  opacity: isSearchBlock ? 1 : 0,
                  zIndex: isSearchBlock ? 2 : 1,
                }}
              >
                <input
                  type="text"
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
              <button id="cart" className="header__cart">
                <img src="/image/header/cart.svg" alt="cart icon" />
              </button>
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
              className="menu__burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
            </div>
            <ul className={isMenuOpen ? "menu__list_active" : "menu__list"}>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About us
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Сatalog
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Сontacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;