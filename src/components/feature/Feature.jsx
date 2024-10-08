import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="container feature">
      <div>
        <img src="./src/assets/feature.png" alt="" />
      </div>
      <div className="feature-right">
        <h1>We Provide Many Features You Can Use</h1>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="feature-checked">
          <img src="./src/assets/checked.png" alt="" />
          <span>Powerfull online protection.</span>
        </div>
        <div className="feature-checked">
          <img src="./src/assets/checked.png" alt="" />
          <span>Internet without borders.</span>
        </div>
        <div className="feature-checked">
          <img src="./src/assets/checked.png" alt="" />
          <span>Supercharged VPN</span>
        </div>
        <div className="feature-checked">
          <img src="./src/assets/checked.png" alt="" />
          <span>No specific time limits.</span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
