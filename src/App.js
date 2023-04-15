import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Advantages />
      </BrowserRouter>
    </>
  );
};

export default App;
