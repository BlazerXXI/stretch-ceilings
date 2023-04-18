import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Advantages />
        <Services />
      </BrowserRouter>
    </>
  );
};

export default App;
