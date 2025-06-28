import HeroText from "../molecule/HeroText";
import HeroSwirl from "~/assets/heroSwirl";
import TwinkelOne from "~/assets/twinkel1";
import TwinkelTwo from "~/assets/twinkel2";
import TwinkelThree from "~/assets/twinkel3";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <main className="flex flex-col justify-center">
      <div className="flex w-full justify-between items-center">
        <HeroSwirl />
        <div className="flex flex-col gap-16 items-center">
          <HeroText />
          <p>We cover all kinds of categories and a weekly special guest.</p>
          <NavLink to="/analytics">
            <Button className="px-8 py-5 hover:cursor-pointer shadow-(--shadow-no-blur)">
            Analyze
          </Button>
          </NavLink>
        </div>
        <div className="w-2xs">
          <TwinkelOne />
          <div className="flex">
            <TwinkelThree />
            <TwinkelTwo />
          </div>
        </div>
      </div>
    </main>
  );
}
