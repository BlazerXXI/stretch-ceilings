import React from "react";
import Slider from "react-slick";

import image1 from "../../images/services/Mask-group.webp";
import image2 from "../../images/services/Mask-group-1.webp";
import image3 from "../../images/services/Mask-group-2.webp";

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  ];
  return (
    <Slider {...settings}>
      {slideContent.map((slideItem) => (
        <div key={slideItem.title}>
          <div>
            <img
              src={slideItem.img}
              width={350}
              height={350}
              alt={slideItem.title}
            />
          </div>
          <div>
            <h3>{slideItem.title}</h3>
            <p>{slideItem.subTitle}</p>
          </div>
          <div>Від {slideItem.price} грн</div>
          <div>
            <button>Замовити</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServicesSlider;
