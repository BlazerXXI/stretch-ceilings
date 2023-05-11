import React from "react";

const CardSalons = (props) => {
  const {
    cardKey,
    image,
    name,
    address,
    locate,
    timetable,
    weekend,
    phoneNum,
    phoneText,
    setSalonId,
  } = props;

  const handleSalon = () => {
    setSalonId(cardKey);
  };

  return (
    <li key={cardKey} className="salons-cards__item salons-item">
      <img
        className="salons-item__image"
        src={image}
        alt={"Зображення " + name}
      />
      <address className="salons-item__address salons-address">
        <p className="salons-address__text">{locate}</p>
        <p className="salons-address__address">{address}</p>
      </address>
      <div className="salons-item__timetable salons-timetable">
        <p className="salons-timetable__timetable">{timetable}</p>
        <p className="salons-timetable__weekend">{weekend}</p>
      </div>
      <a className="salons-item__telephone" href={"tel:" + phoneNum}>
        {phoneText}
      </a>
      <button onClick={handleSalon} className="salons-item__btn">
        Салон {cardKey}
      </button>
    </li>
  );
};

export default CardSalons;
