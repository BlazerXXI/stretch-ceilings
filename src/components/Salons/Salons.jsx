import React, { useEffect, useState } from "react";
import CardSalons from "../CardSalons/CardSalons";
import Map from "../Map/Map";

export const images = {
  image1: require("../../images/salons/salon1.webp"),
  image2: require("../../images/salons/salon2.webp"),
  image3: require("../../images/salons/salon3.webp"),
};

const cardArray = [
  {
    id: 1,
    image: images.image1,
    name: "Салони компанії",
    locate: "пр-т. Героїв Харкова, 257",
    address: "паркування «РОСТ»",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
  {
    id: 2,
    image: images.image2,
    name: "Салони компанії",
    address: "«EXPRESS» 2 етаж",
    locate: "пр-т. Науки, 43",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
  {
    id: 3,
    image: images.image3,
    name: "Салони компанії",
    locate: "пр-т. ул.Героїв Праці, 7",
    address: "«ТРЦ КАРАВАН» ( за ескалатором )",
    timetable: "Пн-Сб: 09.00-19.00",
    weekend: "Вихідний : неділя",
    phoneNum: "0954169926",
    phoneText: "+38 095 123 12 12",
  },
];

const Salons = () => {
  const [salonId, setSalonId] = useState(null);

  useEffect(() => {
    console.log(salonId);
  }, [salonId]);

  return (
    <section className="salons">
      <div className="container">
        <div className="salons__title-block salons-title">
          <h3 className="salons-title__title section-title">Салони компанії</h3>
        </div>
        <ul className="salons-cards">
          {cardArray.map((element) => (
            <CardSalons
              address={element.address}
              cardKey={element.id}
              image={element.image}
              name={element.name}
              locate={element.locate}
              timetable={element.timetable}
              weekend={element.weekend}
              phoneNum={element.phoneNum}
              phoneText={element.phoneText}
              setSalonId={setSalonId}
            />
          ))}
        </ul>
        <Map id={salonId} />
      </div>
    </section>
  );
};

export default Salons;
