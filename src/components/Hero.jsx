import React from "react";
import "./css/hero.css";
import desktopImg from "../assets/images/image-web-3-desktop.jpg";
import mobileImg from "../assets/images/image-web-3-mobile.jpg";

function Hero() {
  return (
    <section className="hero-container">
      <picture className=" item hero-image">
        <source media="(max-width:600px)" srcSet={mobileImg} />
        <img src={desktopImg} alt="hero-image-web-3" />
      </picture>

      <div className=" item hero-text-container">
        <div className="h1-container">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>

        <div className="text-link-container">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a> READ MORE</a>
        </div>
      </div>
      <aside className="item right-side-container">
        <div className="right-child">
          <h2>New</h2>
          <h3 className="right-side-title"> Hydrogen VS Electric Cars</h3>
          <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className="right-child">
          <h4 className="right-side-title">The Downsides of AI Artistry</h4>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>

        <div className="right-child">
          <h5 className="right-side-title"> Is VC Funding Drying Up?</h5>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </aside>
    </section>
  );
}
export default Hero;
