import React from "react";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="container plan">
      <h1>Choose Your Plan</h1>
      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="plans">
        {/* 1 🚩 */}
        <div className="plan-card">
          <img src="./src/assets/box1.png" alt="" />
          <h2 style={{ margin: "10px" }}>Free Plan</h2>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Unlimited Bandwitch</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Encrypted Connection</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>No Traffic Logs</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Works on All Devices</span>
          </div>
          <div className="plan-bottom">
            <h1>Free</h1>
            <button>Select</button>
          </div>
        </div>
        {/* 2🚩 */}
        <div className="plan-card">
          <img src="./src/assets/box1.png" alt="" />
          <h2 style={{ margin: "10px" }}>Standard Plan</h2>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Unlimited Bandwitch</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Encrypted Connection</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Yes Traffic Logs</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Works on All Devices</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Connect Anyware</span>
          </div>
          <div className="plan-bottom">
            <h1>
              $9<span>/mo</span>
            </h1>
            <button>Select</button>
          </div>
        </div>
        {/* 3 🚩 */}
        <div className="plan-card border-red">
          <img src="./src/assets/box1.png" alt="" />
          <h2 style={{ margin: "10px" }}>Free Plan</h2>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Unlimited Bandwitch</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Encrypted Connection</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Yes Traffic Logs</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Works on All Devices</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Connect Anyware</span>
          </div>
          <div className="plan-check">
            <img src="./src/assets/check.png" alt="" />
            <span>Get New Features</span>
          </div>
          <div className="plan-bottom">
            <h1>
              $12<span>/mo</span>
            </h1>
            <button className="bg-red">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
