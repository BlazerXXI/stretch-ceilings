import React from "react";
import Slider from "react-slick";
import image1 from "../../images/gallery/1.jpg";
import image2 from "../../images/gallery/2.jpg";
import image3 from "../../images/gallery/3.jpg";

const GallerySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
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
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
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

  const imageSlider = [
    {
      title: "Slott",
      image: image1,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
    {
      title: "Slott",
      image: image2,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
    {
      title: "Slott",
      image: image3,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
    {
      title: "Slott",
      image: image1,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
    {
      title: "Slott",
      image: image2,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
    {
      title: "Slott",
      image: image3,
      description:
        "Тренд у дизайні інтер’єру. Їх можно робити будь-якої форми : прямі, хаотичні, квардратні , прямокутні  та навіть кутом.В них можна розмістити різне освітлення і втілити свої вподобання завдяки системі “slott”.",
    },
  ];

  const sliderItems = imageSlider.map((item) => (
    <div className="slider-gallery-item" key={item.description}>
      <img
        className="slider-gallery__img"
        src={item.image}
        width={640}
        height={520}
        alt={item.description}
      />
      <div className="slider-gallery__description-block">
        <h3 className="slider-gallery__title">{item.title}</h3>
        <p className="slider-gallery__description">{item.description}</p>
      </div>
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
