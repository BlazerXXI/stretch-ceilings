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
          <div>
            <h2>Преміум матеріали</h2>
          </div>
          <div>
            <Slider {...settings}>{videoSlide}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
