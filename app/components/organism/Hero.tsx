import React from "react";
import Navbar from "../molecule/Navbar";
import HeroText from "../molecule/HeroText";

export default function Hero() {
  return (
    <main className="bg-skin-base px-2 py-6 flex flex-col justify-center items-center">
      <div className="container">
        <Navbar />
      </div>
      <div className="py-16">
      <HeroText />
      </div>
      <div>
        video slider
      </div>
    </main>
  );
}
