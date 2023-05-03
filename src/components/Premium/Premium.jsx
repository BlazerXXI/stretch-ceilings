import React from "react";
import Slider from "react-slick";
import videoItem from "../../images/premium/video.jpg";

const Premium = () => {
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
    <section className="premium">
      <div className="container">
        <div>
          <div className="premium__title-block premium-title-block">
            <h2 className="premium-title-block__title section-title">
              Преміум матеріали
            </h2>
          </div>
          <div className="premium__slider-block premium-slider-block">
            <Slider {...settings}>{videoSlide}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
