import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="container info">
      {/* 1 🚩 */}
      <div className="info-card">
        <div className="info-img">
          <img src="./src/assets/user.png" alt="" />
        </div>
        <div className="info-text">
          <h1>90+</h1>
          <span>Users</span>
        </div>
      </div>
      <div className="vertical-line"></div>
      {/* 2 🚩 */}
      <div className="info-card">
        <div className="info-img">
          <img src="./src/assets/location.png" alt="" />
        </div>
        <div className="info-text">
          <h1>30+</h1>
          <span>Locations</span>
        </div>
      </div>
      <div className="vertical-line"></div>
      {/* 3 🚩 */}
      <div className="info-card">
        <div className="info-img">
          <img src="./src/assets/server.png" alt="" />
        </div>
        <div className="info-text">
          <h1>50+</h1>
          <span>Servers</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
