// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/started/GetStarted";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
