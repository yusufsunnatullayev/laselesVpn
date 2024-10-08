import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Info from "../components/info/Info";
import Feature from "../components/feature/Feature";
import Plan from "../components/plan/Plan";
import Global from "../components/global/Global";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Info />
      <Feature />
      <Plan />
      <Global />
      <Testimonials />
    </div>
  );
};

export default Home;
