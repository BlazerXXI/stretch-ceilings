import React from "react";
import ServicesSlider from "../ServicesSlider/ServicesSlider";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__block-title">
          <h2 className="services-block-title__title ">Послуги / товари</h2>
        </div>
        <ServicesSlider />
      </div>
    </section>
  );
};

export default Services;
