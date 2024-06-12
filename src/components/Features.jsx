import React from "react";
import "./css/features.css";
import retro from "../assets/images/image-retro-pcs.jpg";
import top from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

function Features() {
  return (
    <section className="features-container">
      <div className="first-second-container">
        <div className="feature first">
          <img src={retro} alt="image-retro-pcs" />
          <div>
            <span className="number">01</span>
            <span className="title"> Reviving Retro PCs</span>
            <p>What happens when old PCs<br/> are given modern upgrades?</p>
          </div>
        </div>

        <div className="feature second">
          <img src={top} alt="top-pcs-image" />
          <div>
            <span className="number">02</span>
            <span className="title">Top 10 Laptops of 2022</span>
            <p>Our best picks for various<br/> needs and budgets.</p>
          </div>
        </div>
      </div>
      <div className="feature third">
        <img src={gaming} alt="gaming-image" />
        <div>
          <span className="number">03</span>
          <span className="title">The Growth of Gaming</span>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
}
export default Features;
