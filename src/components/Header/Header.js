import React, { useState, useRef, useEffect } from "react";
import logo from "../../images/header/logo.png";
import { Link } from "react-router-dom";

const logoAlt = "Натяжні стелі Star Deko";
const listArr = [
  {
    name: "Переваги компанії",
    link: "/advantages",
  },
  { name: "Галерея", link: "/gallery" },
  { name: "Послуги / товари", link: "/services" },
  { name: "Салони компанії", link: "/salons" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo-block">
          <Link exact to="/">
            <img width={100} src={logo} alt={logoAlt} />
          </Link>
        </div>
        <div className="header__right-menu">
          <nav className="header__nav">
            <ul
              className={`header-nav__list nav-list ${
                isNavOpen ? "nav-list__open" : ""
              }`}
            >
              {listArr.map((element) => (
                <li className="nav-list__item" key={element.link}>
                  <Link to={element.link}>{element.name}</Link>
                </li>
              ))}
              <li className="header__contact-block">
                <Link to="tel:0954169926" className="contact-block__item">
                  +38 095 416 99 26
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`menu-toggle ${isNavOpen ? "menu-toggle__open" : ""}`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${isNavOpen ? "visible" : ""}`}
        onClick={toggleNav}
      ></div>
    </header>
  );
};

export default Header;
