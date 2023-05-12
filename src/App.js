import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import Guarantee from "./components/Guarantee/Guarantee";
import Gallery from "./components/Gallery/Gallery";
import Materials from "./components/Materials/Materials";
import Salons from "./components/Salons/Salons";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Hero />
          <Advantages />
          <Services />
          <Guarantee />
          <Gallery />
          <Materials />
          <Salons />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
