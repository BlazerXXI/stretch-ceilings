import React from "react";
import GallerySlider from "../GallerySlider/GallerySlider";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery container">
        <div className="gallery__title-block gallery-container gallery-title-block">
          <h2 className="gallery-title-block__title section-title">Галерея</h2>
        </div>
        <div className="gallery__slider-block">
          <GallerySlider />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
