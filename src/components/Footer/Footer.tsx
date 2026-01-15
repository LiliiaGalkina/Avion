const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__up up-footer">
          <address className="up-footer__address">
            <h3 className="footer__title">Our address</h3>
            <span>Country</span>
            <span>City</span>
            <span>Street, 99</span>
          </address>
          <nav className="up-footer__menu menu-footer">
            <h3 className="footer__title">Menu</h3>
            <ul className="menu-footer__list">
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Home
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  About us
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Сatalog
                </a>
              </li>
              <li className="menu-footer__item">
                <a href="#" className="menu-footer__link">
                  Сontacts
                </a>
              </li>
            </ul>
          </nav>
          <div className="up-footer__sign-up sign-up-footer">
            <h3 className="footer__title">Join our mailing list</h3>
            <div className="sign-up-footer__block">
              <input
                type="email"
                className="sign-up-footer__input"
                placeholder="your@email.com"
              />
              <button className="sign-up-footer__btn">Sign up</button>
            </div>
          </div>
        </div>
        <div className="footer__down down-footer">
          <p className="down-footer__copyright">Copyright 2026 Avion LTD</p>
          <div className="down-footer__social social">
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/linkedin.svg"
                alt="linkedin"
                className="social__item"
              />
            </a>
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/facebook.svg"
                alt="facebook"
                className="social__item"
              />
            </a>
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/instagram.svg"
                alt="instagram"
                className="social__item"
              />
            </a>
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/skype.svg"
                alt="skype"
                className="social__item"
              />
            </a>
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/twitter.svg"
                alt="twitter"
                className="social__item"
              />
            </a>
            <a href="#" className="social__link" target="_blank">
              <img
                src="/image/footer/pinterest.svg"
                alt="pinterest"
                className="social__item"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
