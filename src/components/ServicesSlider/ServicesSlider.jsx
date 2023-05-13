import React, { useState } from "react";
import Slider from "react-slick";
import image1 from "../../images/services/serv-1.png";
import image2 from "../../images/services/serv-2.png";
import image3 from "../../images/services/serv-3.png";
import { Popup } from "reactjs-popup";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideContent = [
    {
      img: image1,
      title: "Матові / Глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image2,
      title: "Лофт",
      subTitle: "Натяжні стелі",
      price: "1400",
    },
    {
      img: image3,
      title: "Фактурні",
      subTitle: "Натяжні стелі",
      price: "820",
    },
    {
      img: image1,
      title: "Матові / Глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image2,
      title: "Лофт",
      subTitle: "Натяжні стелі",
      price: "1400",
    },
    {
      img: image3,
      title: "Фактурні",
      subTitle: "Натяжні стелі",
      price: "820",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Please enter your name");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (phone.trim() === "") {
      setPhoneError("Please enter your phone number");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully");
    } else {
			console.log("Form validation failed");
    }
  };

  return (
    <>
      <Popup open={isOpen} onClose={handleClose} closeOnDocumentClick={true}>
        <div className="modal-block">
          <i className="modal-block__bg-image" />
          <div className="modal-block__content-modal">
            <button
              className="content-modal__close-button"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="content-modal__content-modal">
              <div className="content-modal__title-modal">
                <h3 className="title-modal__title">
                  Вкажіть Ваше ім’я та номер телефону
                </h3>
                <p className="title-modal__text">
                  Ми зв’яжемося з вами для оформлення замовлення
                </p>
              </div>
              <form>
                <div className="content-modal__iputs-block-modal">
                  <div className="iputs-block-modal__block-input-modal">
                    <input
                      name="name"
                      id="name"
                      className="block-input-modal__input"
                      type="text"
                      placeholder="Ваше ім’я"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      name="phone"
                      id="phone"
                      className="block-input-modal__input"
                      type="text"
                      placeholder="Номер телефону"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      name="email"
                      id="email"
                      className="block-input-modal__input"
                      type="text"
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <p className="block-input-modal__text">
                    *не обов’язкове поле
                  </p>
                </div>
                <div className="content-modal__button-submit-modal">
                  <button
                    // type="submit"
                    onClick={handleSubmit}
                    className="btn-submit-modal__btn-submit"
                  >
                    Відправити
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Popup>
      <Slider {...settings}>
        {slideContent.map((slideItem) => (
          <div
            className="slick-slide__item slick-item"
            key={slideItem.title}
            tabIndex={0}
          >
            <div className="slick-item__image">
              <img
                className="slick-item-image__img"
                src={slideItem.img}
                width={350}
                height={350}
                alt={slideItem.title}
              />
            </div>
            <div className="slick-item__text">
              <div className="slick-item__text-block slick-text-block">
                <h3 className="slick-text-block__title">{slideItem.title}</h3>
                <p className="slick-text-block__subtitle">
                  {slideItem.subTitle}
                </p>
              </div>
              <div className="slick-item__price">Від {slideItem.price} грн</div>
            </div>
            <div className="slick-item__button-block slick-button-block">
              <button className="slick-btn-block__btn " onClick={handleOpen}>
                Замовити
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ServicesSlider;
