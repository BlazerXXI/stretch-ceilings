import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Modal = () => {
  const popup = React.useRef(null);
  const closePopup = () => {
    popup.current.close();
  };

  const heroPopup = document.querySelector(
    ".hero-title__popup-content .popup-content "
  );

  if (heroPopup) {
    document.addEventListener("click", function (event) {
      if (!heroPopup.contains(event.target)) {
        closePopup();
      }
    });
  }

  return (
    <>
      <Popup
        trigger={
          <button className="hero-button__btn">Консультація менеджера</button>
        }
        className="hero-title__popup hero-popup"
        closeOnDocumentClick={true}
        closeOnEscape={true}
        modal={true}
        lockScroll={true}
        onClose={closePopup}
        ref={popup}
      >
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <div className="popup-content">
          <div className="hero-title__popup-content-item">
            <Link
              to="tel:0954169926"
              className="hero-title__popup-content-item__link hero-title__popup-content-item__link--tel"
            >
              +38 095 123 12 12
            </Link>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Modal;
