import React from "react";
import Navbar from "../molecule/Navbar";

export default function Hero() {
  return (
    <main className="bg-skin-base px-2 py-6 flex flex-col justify-center items-center">
      <div className="container">
        <Navbar />
      </div>
      <div>
        Main heading
      </div>
      <div>
        video slider
      </div>
    </main>
  );
}
