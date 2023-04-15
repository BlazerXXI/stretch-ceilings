import React from "react";
import icon from "../../images/advantages/advIcon.svg";
import icon1 from "../../images/advantages/advIcon-1.svg";
import icon2 from "../../images/advantages/advIcon-2.svg";
import icon3 from "../../images/advantages/advIcon-3.svg";
import icon4 from "../../images/advantages/advIcon-4.svg";
import icon5 from "../../images/advantages/advIcon-5.svg";
import icon6 from "../../images/advantages/advIcon-6.svg";

const AdvantagesCards = () => {
  const advantageCards = [
    {
      src: icon,
      title: "Власне виробництво",
      text: "Використовуємо тільки алюмінієві сучасні профільні системи, та посилені комплектуючі із серії premium. Встановлюємо вчасно та без затримок.",
    },
    {
      src: icon1,
      title: "Трендові Натяжні Стелі",
      text: "Всі тренди та всі сучасні новинки тільки в нашій компанії",
    },
    {
      src: icon2,
      title: "Сертифіковані полотна",
      text: "Сертифікати та маркування (оригінал) на всі виробники.",
    },
    {
      src: icon3,
      title: "європейські матеріали",
      text: "Використовуємо виробники полотен premium Франція, та Німеччина натяжні ПВХ та тканинні.",
    },
    {
      src: icon4,
      title: "Офіційна гарантія",
      text: "15 років на Полотно та на сам Монтаж",
    },
    {
      src: icon5,
      title: "Професійний монтаж",
      text: "Монтажні бригади свої, а не наймані. Виконуємо складні об'єкти",
    },
    {
      src: icon6,
      title: "МЕРЕЖА САЛОНІВ",
      text: "17 років компанії star deko Завітайте до одного з салонів, який ближче до вас",
    },
  ];

  const advantageItems = advantageCards.map((advantage, index) => (
    <li className="advantages-cards__item" key={index}>
      <div className="advantages-cards-item__img-block">
        <img
          className="advantages-cards-item-block__img"
          src={advantage.src}
          alt={advantage.title}
          width={60}
          height={60}
          loading="lazy"
        />
      </div>
      <div className="advantages-cards-item__text-block">
        <h3 className="advantages-cards-item-block__title">
          {advantage.title}
        </h3>
        <p className="advantages-cards-item__text">{advantage.text}</p>
      </div>
    </li>
  ));

  return <ul>{advantageItems}</ul>;
};

export default AdvantagesCards;
