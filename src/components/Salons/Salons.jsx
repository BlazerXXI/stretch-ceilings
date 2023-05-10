import React from "react";
import CardSalons from "../CardSalons/CardSalons";

export const images = {
  image1: require("../../images/salons/salon1.webp"),
  image2: require("../../images/salons/salon2.webp"),
  image3: require("../../images/salons/salon3.webp"),
};

const cardArray = [
  {
    id: 1,
    image: images.image1,
    locate: "пр-т. Героїв Харкова, 257 паркування «РОСТ»",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
  {
    id: 2,
    image: images.image2,
    locate: "пр-т. Науки, 43 «EXPRESS» 2 етаж",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
  {
    id: 3,
    image: images.image3,
    locate: "пр-т. ул.Героїв Праці, 7 «ТРЦ КАРАВАН» ( за ескалатором )",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
];

const Salons = () => (
  <section className="salons">
    <div className="container">
      <div className="salons__title-block salons-title">
        <h3 className="salons-title__title">Салони компанії</h3>
      </div>
      <ul className="salons-cards">
        {cardArray.map((element) => (
          <CardSalons
            cardKey={element.id}
            image={element.image}
            locate={element.locate}
            timetable={element.timetable}
            weekend={element.weekend}
            phoneNum={element.phoneNum}
            phoneText={element.phoneText}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default Salons;
