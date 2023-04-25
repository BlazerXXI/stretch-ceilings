import React from "react";
import Slider from "react-slick";
import image1 from "../../images/gallery/1.webp";
import image2 from "../../images/gallery/2.webp";
import image3 from "../../images/gallery/3.webp";

const GallerySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 4098,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
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
  return (
    <>
      <Slider className="slider-gallery" {...settings}>
        <img
          className="slider-gallery__img"
          src={image1}
          width={640}
          height={520}
          alt=""
        />
        <img
          className="slider-gallery__img"
          src={image2}
          width={640}
          height={520}
          alt=""
        />
        <img
          className="slider-gallery__img"
          src={image3}
          width={640}
          height={520}
          alt=""
        />
        <img
          className="slider-gallery__img"
          src={image1}
          width={640}
          height={520}
          alt=""
        />
        <img
          className="slider-gallery__img"
          src={image2}
          width={640}
          height={520}
          alt=""
        />
        <img
          className="slider-gallery__img"
          src={image3}
          width={640}
          height={520}
          alt=""
        />
      </Slider>
    </>
  );
};

export default GallerySlider;
