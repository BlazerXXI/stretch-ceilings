import React from "react";
import AdvantagesCards from "../AdvantagesCards/AdvantagesCards";
import { useInView } from "react-intersection-observer";

const Advantages = () => {
  const [ref, InView] = useInView({
    threshold: 0,
  });

  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__polygon">
          <i />
        </div>
        <div className="advantages__title">
          <h2>Переваги компанії</h2>
        </div>
        <div className={`advantages__cards ${InView ? "View" : ""}`} ref={ref}>
          <AdvantagesCards />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
