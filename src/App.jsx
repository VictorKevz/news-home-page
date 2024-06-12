import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import "./App.css";

function App() {
  const [isMaskOpen, setMask] = useState(false);
  function handleMask() {
    setMask(!isMaskOpen);
  }
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Navbar onClose={handleMask} />
        <Hero />
        <Features />
      </div>
      <div className={`navbar-mask ${isMaskOpen? 'show':''}`}></div> 
    </main>
  );
}

export default App;
