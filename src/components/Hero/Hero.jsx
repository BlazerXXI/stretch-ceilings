import React, { useState } from "react";
import { Link } from "react-router-dom";

// import social icons
import Instagram from "../../images/hero/Inst.svg";
import Phone from "../../images/hero/Phone.svg";
import Facebook from "../../images/hero/Facebook.svg";
// import active social icons
import InstagramActive from "../../images/hero/active/Inst.svg";
import PhoneActive from "../../images/hero/active/Phone.svg";
import FacebookActive from "../../images/hero/active/Facebook.svg";

// import modal
import Modal from "../Modals/Modal";

// social icons array
const listArr = [
  {
    img: Instagram,
    link: "https://www.instagram.com/",
    alt: "Instagram",
    size: 35,
    activeImg: InstagramActive,
  },
  {
    img: Phone,
    link: "tel:0951231212",
    alt: "Phone",
    size: 35,
    activeImg: PhoneActive,
  },
  {
    img: Facebook,
    link: "https://www.facebook.com",
    alt: "Facebook",
    size: 35,
    activeImg: FacebookActive,
  },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageHover = (image) => {
    setActiveImage(image);
  };
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
                <Link
                  target="_blank"
									rel="noopener noreferrer nofollow"
                  className="hero-social__link"
                  to={element.link}
                  onMouseEnter={() => handleImageHover(element.img)}
                  onMouseLeave={() => setActiveImage(null)}
                >
                  <img
                    className="hero-social__img"
                    src={
                      activeImage === element.img
                        ? element.activeImg
                        : element.img
                    }
                    alt={element.alt}
                    width={element.size}
                    height={element.size}
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
