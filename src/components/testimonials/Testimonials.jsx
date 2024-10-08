import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>Trusted by Thousands of Happy Customers</h1>
      <p className="p">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className="opinions">
        {/* 1 🚩 */}
        <div className="opinion-card">
          <div className="opinion-top">
            <div className="customer">
              <img src="./src/assets/customer1.png" alt="" />
              <div className="customer-detail">
                <span>Viezh Robert</span>
                <p>Warsaw, Poland</p>
              </div>
            </div>
            <div className="customer-score">
              <span>4.5</span>
              <img src="./src/assets/star.png" alt="" />
            </div>
          </div>
          <div className="opinion-bottom">
            <p>
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        {/* 2 🚩 */}
        <div className="opinion-card">
          <div className="opinion-top">
            <div className="customer">
              <img src="./src/assets/customer2.png" alt="" />
              <div className="customer-detail">
                <span>Yessica Christy</span>
                <p>Shanxi, China</p>
              </div>
            </div>
            <div className="customer-score">
              <span>4.5</span>
              <img src="./src/assets/star.png" alt="" />
            </div>
          </div>
          <div className="opinion-bottom">
            <p>
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
        </div>
        {/* 3 🚩 */}
        <div className="opinion-card">
          <div className="opinion-top">
            <div className="customer">
              <img src="./src/assets/customer3.png" alt="" />
              <div className="customer-detail">
                <span>Kim Young Jou</span>
                <p>Seoul, South Korea</p>
              </div>
            </div>
            <div className="customer-score">
              <span>4.5</span>
              <img src="./src/assets/star.png" alt="" />
            </div>
          </div>
          <div className="opinion-bottom">
            <p>
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
      </div>
      <div className="opinion-navigation">
        <div className="navigation-shapes">
          <div className="oval"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="navigation-btns">
          <button className="arrow-left">
            <img src="./src/assets/arrow-left.png" alt="" />
          </button>
          <button className="arrow-right">
            <img src="./src/assets/arrow-right.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
