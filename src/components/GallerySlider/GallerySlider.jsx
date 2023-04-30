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
        breakpoint: 4099,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const imageSlider = [
    {
      image: image1,
      description: "This is the first image",
    },
    {
      image: image2,
      description: "This is the second image",
    },
    {
      image: image3,
      description: "This is the third image",
    },
    {
      image: image1,
      description: "This is the first image",
    },
    {
      image: image2,
      description: "This is the second image",
    },
    {
      image: image3,
      description: "This is the third image",
    },
  ];

  const sliderItems = imageSlider.map((item) => (
    <div key={item.description}>
      <img
        className="slider-gallery__img"
        src={item.image}
        width={640}
        height={520}
        alt={item.description}
      />
      <p>{item.description}</p>
    </div>
  ));

  return (
    <>
      <Slider className="slider-gallery" {...settings}>
        {sliderItems}
      </Slider>
    </>
  );
};

export default GallerySlider;
