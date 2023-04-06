import React from "react";
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
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo-block">
          <Link exact to="/">
            <img width={100} src={logo} alt={logoAlt} />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header-nav__list nav-list ">
            {listArr.map((element) => (
              <li className="nav-list__item">
                <Link to={element.link}>{element.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__contact-block">
          <Link to="tel:0954169926" className="contact-block__item">
            +38 095 416 99 26
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
