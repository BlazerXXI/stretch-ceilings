import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import Guarantee from "./components/Guarantee/Guarantee";
import Gallery from "./components/Gallery/Gallery";
import Premium from "./components/Premium/Premium";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Advantages />
        <Services />
        <Guarantee />
        <Gallery />
        <Premium />
      </BrowserRouter>
    </>
  );
};

export default App;
