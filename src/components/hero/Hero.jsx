import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero">
        <div className="hero-left">
          <h1>Want anything to be easy with LaslesVPN.</h1>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src="./src/assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
