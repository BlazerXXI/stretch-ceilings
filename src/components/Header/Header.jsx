import React, { useState, useRef, useEffect } from "react";
import LogoImg from "../LogoImg/LogoImg";

const listArr = [
  { name: "Переваги компанії", link: "#advantages" },
  { name: "Галерея", link: "#gallery" },
  { name: "Послуги / товари", link: "#services" },
  { name: "Салони компанії", link: "#salons" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleNav = () => {
    if (window.innerWidth <= 769) {
      setIsNavOpen(!isNavOpen);
    } else {
      return;
    }
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

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  });

  return (
    <header className="header" id="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo-block">
          <LogoImg />
        </div>
        <div className="header__right-menu">
          <nav className="header__nav">
            <ul
              className={`header-nav__list nav-list ${
                isNavOpen ? "nav-list__open" : ""
              }`}
            >
              {listArr.map((element) => (
                <li
                  onClick={toggleNav}
                  className="nav-list__item"
                  key={element.link}
                >
                  <a href={element.link}>{element.name}</a>
                </li>
              ))}
              <li className="header__contact-block">
                <a href="tel:0951231212" className="contact-block__item">
                  +38 095 123 12 12
                </a>
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
