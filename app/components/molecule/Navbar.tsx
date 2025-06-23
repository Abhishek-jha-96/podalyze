import LogoIcon from "~/assets/logo";
import Tabs from "../cell/Tabs";
import { Button } from "../ui/button";
import LoginButton from "../cell/LoginButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 font-mono font-medium">
      <div>
        <LogoIcon />
      </div>
      <div>
        <Tabs />
      </div>
      <div className="flex justify-between w-48">
        <LoginButton text="Login" path="login/"></LoginButton>
        <Button className="hover:cursor-pointer shadow-(--shadow-no-blur)">SUBSCRIBE</Button>
      </div>
    </div>
  );
}
