import React, { useState } from "react";
import Slider from "react-slick";
import image1 from "../../images/services/Mask-group.webp";
import image2 from "../../images/services/Mask-group-1.webp";
import image3 from "../../images/services/Mask-group-2.webp";
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
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image2,
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image3,
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image1,
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image2,
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
    {
      img: image3,
      title: "матові / глянцеві",
      subTitle: "Натяжні стелі",
      price: "600",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
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
              <div className="content-modal__iputs-block-modal">
                <div className="iputs-block-modal__block-input-modal">
                  <input
                    className="block-input-modal__input"
                    type="text"
                    placeholder="Ваше ім’я"
                  />
                  <input
                    className="block-input-modal__input"
                    type="text"
                    placeholder="Номер телефону"
                  />
                  <input
                    className="block-input-modal__input"
                    type="text"
                    placeholder="Email*"
                  />
                </div>
                <p className="block-input-modal__text">*не обов’язкове поле</p>
              </div>
              <div className="content-modal__button-submit-modal">
                <button className="btn-submit-modal__btn-submit">
                  Відправити
                </button>
              </div>
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