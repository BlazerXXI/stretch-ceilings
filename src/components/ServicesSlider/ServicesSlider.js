import React from "react";
import Slider from "react-slick";
import image1 from "../../images/services/Mask-group.webp";
import image2 from "../../images/services/Mask-group-1.webp";
import image3 from "../../images/services/Mask-group-2.webp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    accessibility: true,
  };
  const slideContent = [
    {
      img: image1,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
    {
      img: image2,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
    {
      img: image3,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
    {
      img: image1,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
    {
      img: image2,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
    {
      img: image3,
      title: "title",
      subTitle: "subTitle",
      price: "price",
    },
  ];
  return (
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
              <p className="slick-text-block__subtitle">{slideItem.subTitle}</p>
            </div>
            <div className="slick-item__price">Від {slideItem.price} грн</div>
          </div>
          <div className="slick-item__button-block slick-button-block">
            <button className="slick-btn-block__btn ">Замовити</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServicesSlider;
