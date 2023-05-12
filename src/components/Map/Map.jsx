import React from "react";
import image from "../../images/map/map.webp";
import image2 from "../../images/map/mapres2.jpg";
import image3 from "../../images/map/mapres3.jpg";

const Map = (salonId) => {
  let mapLink;
  let img = image;

  if (salonId.id === 1) {
    img = image;
    mapLink =
      "https://www.google.com/maps/place/STAR+DEKO+%D0%9D%D0%B0%D1%82%D1%8F%D0%B6%D0%BD%D1%8B%D0%B5+%D0%9F%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%B8+Gallery/@49.9668737,36.3207718,17z/data=!4m10!1m2!2m1!1zc3RhciBkZWtvINCz0LXRgNC-0LXQsiDQpdCw0YDRjNC60L7QstCwIDI1Nw!3m6!1s0x4127a11e3571bc11:0xb358dfad40571e28!8m2!3d49.9668046!4d36.3207657!15sCitzdGFyIGRla28g0LPQtdGA0L7QtdCyINCl0LDRgNGM0LrQvtCy0LAgMjU3Wi0iK3N0YXIgZGVrbyDQs9C10YDQvtC10LIg0YXQsNGA0YzQutC-0LLQsCAyNTeSAQ5yZXBhaXJfc2VydmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VORE5uTjFSa3AzRUFF4AEA!16s%2Fg%2F11g0zr5hxs";
  } else if (salonId.id === 2) {
    img = image2;
    mapLink =
      "https://www.google.com/maps/place/STAR+DEKO+%D0%9D%D0%B0%D1%82%D1%8F%D0%B6%D0%BD%D1%8B%D0%B5+%D0%9F%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%B8+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2/@50.0347505,36.2189327,18z/data=!4m6!3m5!1s0x4127a6b4c3a7b067:0xed3a4b3d329e49a0!8m2!3d50.0349054!4d36.2200554!16s%2Fg%2F11f3wd4qz0";
  } else if (salonId.id === 3) {
    img = image3;
    mapLink =
      "https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%B5%D1%80%D0%BE%D0%B5%D0%B2+%D0%A2%D1%80%D1%83%D0%B4%D0%B0,+7,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@50.0290381,36.3280266,17z/data=!3m1!4b1!4m6!3m5!1s0x4127a7655bdc16f1:0xc45041335c30b0b6!8m2!3d50.0290381!4d36.3280266!16s%2Fg%2F11bw3wvjpq";
  }

  return (
    <div className="map">
      <a href={mapLink} target="_blank" rel="noreferrer noopener nofollow">
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default Map;
