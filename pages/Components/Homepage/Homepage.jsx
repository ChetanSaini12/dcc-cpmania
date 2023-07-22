import React from "react";
import HeroLottie from "./HeroLottie";

const Homepage = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="lottie">
          <HeroLottie />
        </div>
        <div>
            <svg className="design1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M40.9,-47C56.2,-45.1,74.2,-37.5,80,-24.8C85.8,-12.1,79.4,5.8,69.8,18.8C60.3,31.8,47.6,40,35.5,41.9C23.3,43.8,11.7,39.4,-1.8,41.8C-15.2,44.2,-30.4,53.4,-36.9,49.7C-43.5,46,-41.4,29.4,-40.5,16.8C-39.6,4.2,-39.8,-4.4,-35.4,-9.5C-31,-14.7,-22.1,-16.3,-15.4,-21.2C-8.7,-26,-4.4,-33.9,4.2,-39.7C12.7,-45.4,25.5,-49,40.9,-47Z" transform="translate(100 100)" />
            </svg>
            <svg className="design2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8A3FFC" d="M17.1,-28.2C23.3,-19,30.3,-15.6,43.2,-6.8C56,2,74.7,16.2,71,21.7C67.3,27.2,41.3,24.1,25.7,29.4C10.2,34.7,5.1,48.5,-0.5,49.2C-6.1,50,-12.3,37.7,-20.3,29.9C-28.3,22.1,-38.2,18.9,-40,13C-41.8,7.2,-35.6,-1.2,-32.4,-10.4C-29.2,-19.6,-29.1,-29.7,-24.2,-39.3C-19.3,-49,-9.6,-58.1,-2.1,-55.2C5.4,-52.4,10.9,-37.4,17.1,-28.2Z" transform="translate(100 100)" />
            </svg>
        </div>
        <div className="text">
          <h1> 
            <span
            className="bg-gradient-to-r from-sky-300 to-fuchsia-700 text-transparent bg-clip-text ">Dream Code Compete
            </span>
            </h1>
          <p className="bg-gradient-to-r from-teal-300 to-fuchsia-300 text-transparent bg-clip-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo a nihil labore inventore libero quaerat enim ea, explicabo, iste obcaecati expedita quidem nesciunt? Excepturi inventore necessitatibus quos eum, quam delectus!</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
