 /* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/content/Hero";
import Clients from "./components/content/Clients";
import Products from "./components/content/Products";
import Service from "./components/content/Service";
import Portfolio from "./components/content/Portfolio";
import Factory from "./components/content/Factory";
import WhatsappButton from "./components/content/WhatsappButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Products />
      <Service />
      <Portfolio />
      <Factory />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
