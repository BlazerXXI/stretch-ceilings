import React from "react";
import LogoImg from "../LogoImg/LogoImg";


const Footer = () => {
  const footerMenu = [
    {
      id: 1,
      text: "Переваги компанії",
      link: "#advantages",
    },
    {
      id: 2,
      text: "Послуги / товари",
      link: "#services",
    },
    {
      id: 3,
      text: "Гарантія / договір",
      link: "#guarantee",
    },
    {
      id: 4,
      text: "Галерея",
      link: "#gallery",
    },
    {
      id: 5,
      text: "Преміум матеріали",
      link: "#premium",
    },
    {
      id: 6,
      text: "Салони компанії",
      link: "#salons",
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <a href="#header" className="up-btn__link">
          <i className="up-btn"></i>
        </a>
        <div className="footer__logo-block">
          <LogoImg />
        </div>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {footerMenu.map((item) => (
              <li key={item.id} className="footer__nav-item">
                <a href={item.link} className="footer__nav-link">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="contact-block">
          <a href="tel:0951231212" className="contact__block-item">
            +38 095 123 12 12
          </a>
          <p className="footer__all-rights-reserved">
            Всі права захищені, 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
