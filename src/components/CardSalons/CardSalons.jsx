import React from "react";

const CardSalons = (props) => {
  const { cardKey, image, locate, timetable, weekend, phoneNum, phoneText } =
    props;
  return (
    <li key={cardKey} className="salons-cards__item salons-item">
      <img
        className="salons-item__image"
        src={image}
        alt={"Зображення " + locate}
      />
      <address className="salons-item__address salons-address">
        <p className="salons-address__text">{locate}</p>
      </address>
      <div className="salons-item__timetable salons-timetable">
        <p className="salons-timetable__timetable">{timetable}</p>
        <p className="salons-timetable__weekend">{weekend}</p>
      </div>
      <a className="salons-item__telephone" href={"tel:" + phoneNum}>
        {phoneText}
      </a>
    </li>
  );
};

export default CardSalons;
