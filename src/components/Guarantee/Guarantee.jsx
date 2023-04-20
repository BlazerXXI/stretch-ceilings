import React from "react";

const Guarantee = () => {
  const guarantee = [
    {
      title: "Офіційна гарантія",
      text: "15 років на полотно та на сам монтаж",
    },
    {
      title: "Постгарантійне Обслуговування",
      text: "Несемо відповідальність всі 15 років",
    },
    {
      title: "Салони Компаніі",
      text: "Завжди в вільному доступі",
    },
    {
      title: "Сертифіковані Матеріали",
      text: "Використовуємо тільки безопасні Європейські полотна premium та алюмінієві сучасні профільні системи",
    },
  ];
  const deal = [
    {
      title: "Прозора Цінова Політика",
      text: "Консультація менеджера , кошторис",
    },
    {
      title: "Офіційний договір",
      text: "Укладайте прямо на об'єкті (вимірі)",
    },
    {
      title: "сервісний контроль",
      text: "На кожному етапі співпраці",
    },
    {
      title: "прийом роботи",
      text: "Остаточним розрахунком (залишком за договором )",
    },
  ];
  return (
		<section className="guarantee">
		<div className="guarantee__header">
			<h2 className="guarantee__title">гарантія / договір</h2>
		</div>
		<ul className="guarantee__list">
			{guarantee.map((guaranteeItem, index) => {
				return (
					<li key={`guarantee-${index}`} className="guarantee__item">
						<h3 className="guarantee__item-title">{guaranteeItem.title}</h3>
						<p className="guarantee__item-text">{guaranteeItem.text}</p>
					</li>
				);
			})}
		</ul>
		<ul className="guarantee__list">
			{deal.map((dealItem, index) => {
				return (
					<li key={`deal-${index}`} className="guarantee__item">
						<h3 className="guarantee__item-title">{dealItem.title}</h3>
						<p className="guarantee__item-text">{dealItem.text}</p>
					</li>
				);
			})}
		</ul>
	</section>
	
  );
};

export default Guarantee;
