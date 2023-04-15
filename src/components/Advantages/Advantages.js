import React from "react";
import AdvantagesCards from "../AdvantagesCards/AdvantagesCards";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__polygon">
          <i />
        </div>
        <div className="advantages__title">
          <h2>Переваги компанії</h2>
        </div>
        <div className="advantages__cards">
          <AdvantagesCards />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
