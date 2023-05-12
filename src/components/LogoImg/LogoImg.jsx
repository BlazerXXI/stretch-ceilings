import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.png";
const logoAlt = "Натяжні стелі Star Deko";

const LogoImg = () => {
  return (
    <Link to="/">
      <img width={100} height={100} src={logo} alt={logoAlt} />
    </Link>
  );
};

export default LogoImg;
