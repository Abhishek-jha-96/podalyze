import LogoIcon from "~/assets/logo";
import Tabs from "../cell/Tabs";
import { Button } from "../ui/button";
import LoginButton from "../cell/LoginButton";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between font-mono font-medium bg-white/10 backdrop-blur-md border border-white/20 p-2 px-12 shadow-md">
      <div>
        <LogoIcon />
      </div>
      <div>
        <Tabs />
      </div>
      <div className="flex justify-between w-48">
        <LoginButton text="Login" path="login/"></LoginButton>
        <NavLink to="/subscription" end>
          <Button className="hover:cursor-pointer shadow-(--shadow-no-blur)">
            SUBSCRIBE
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
