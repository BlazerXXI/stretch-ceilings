import React from "react";
import { Link } from "react-router-dom";

// import social icons
import Instagram from "../../images/hero/Inst.svg";
import Phone from "../../images/hero/Phone.svg";
import Facebook from "../../images/hero/Facebook.svg";
import Modal from "../Modals/Modal";

// button Hero page

// social icons array
const listArr = [
  {
    img: Instagram,
    link: "/instagram",
    alt: "Instagram",
    size: 35,
  },
  { img: Phone, link: "/phone", alt: "Phone", size: 35 },
  { img: Facebook, link: "/facebook", alt: "Facebook", size: 35 },
];

const Hero = () => {
  return (
    <section className="hero">
      <i className="hero__bg" />
      <div className="container">
        <div className="hero__title-block">
          <div className="hero-title-block__title">
            <h3 className="hero__title-item">Трендові</h3>
            <h2 className="hero__title-item">Натяжні стелі</h2>
            <h3 className="hero__title-item">Мережа салонів</h3>
          </div>
          <div className="hero-title__button hero__button">
            <Modal />
          </div>
        </div>
        <div className="hero__social-block">
          <ul className="hero-social__list hero-social-list ">
            {listArr.map((element) => (
              <li className="hero-social-list__item" key={element.link}>
                <Link className="hero-social__link" to={element.link}>
                  <img
                    className="hero-social__img"
                    src={element.img}
                    alt={element.alt}
                    width={element.size}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
