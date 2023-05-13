import React from "react";
import Slider from "react-slick";
import videoItem from "../../images/materials/video.jpg";

const Materials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const videoArr = [
    {
      description: "Полотна лофт фактура",
      src: videoItem,
    },
    {
      description: "Полотна лофт фактура",
      src: videoItem,
    },
    {
      description: "Полотна лофт фактура",
      src: videoItem,
    },
  ];

  const videoSlide = videoArr.map((item) => (
    <div>
      <div key={item.description} className="video-item">
        <img src={item.src} alt={item.description} />
      </div>
      <div className="video-description">
        <h3>{item.description}</h3>
      </div>
    </div>
  ));
  return (
    <section id="materials" className="materials">
      <div className="container">
        <div>
          <div className="materials__title-block materials-title-block">
            <h2 className="materials-title-block__title section-title">
              Преміум матеріали
            </h2>
          </div>
          <div className="materials__slider-block materials-slider-block">
            <Slider {...settings}>{videoSlide}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
