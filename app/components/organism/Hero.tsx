import React from "react";
import Navbar from "../molecule/Navbar";
import HeroText from "../molecule/HeroText";
import HeroSwirl from "~/assets/heroSwirl";
import TwinkelOne from "~/assets/twinkel1";
import TwinkelTwo from "~/assets/twinkel2";
import TwinkelThree from "~/assets/twinkel3";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="bg-skin-base py-6 flex flex-col justify-center items-center">
      <div className="container">
        <Navbar />
      </div>
      <div className="flex w-full py-8 justify-between items-center">
        <HeroSwirl />
        <div className="flex flex-col gap-16 items-center">
        <HeroText />
        <p>We cover all kinds of categories and
        a weekly special guest.</p>
        <Button>SUBSCRIBE</Button>
        </div>
        <div className="w-2xs">
          <TwinkelOne />
          <div className="flex">
            <TwinkelThree />
            <TwinkelTwo />
          </div>
        </div>
      </div>
      <div>video slider</div>
    </main>
  );
}
