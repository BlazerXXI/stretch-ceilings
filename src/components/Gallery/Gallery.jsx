import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container container">
        <div className="gallery__title-block gallery-title-block">
          <h2 className="gallery-title-block__title">Галерея</h2>
        </div>
        <div className="gallery__slider-block">{/* slick */}</div>
      </div>
    </section>
  );
};

export default Gallery;
