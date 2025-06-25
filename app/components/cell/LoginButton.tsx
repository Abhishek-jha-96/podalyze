import { Button } from "../ui/button";
import { NavLink } from "react-router";

interface LoginButtonProps {
  text: string;
  path: string;
}

export default function LoginButton({ text, path }: LoginButtonProps) {
  return (
    <NavLink to={path} end>
      <Button className="bg-transparent text-black border-2 border-black hover:bg-transparent hover:cursor-pointer font-semibold">
        {text}
      </Button>
    </NavLink>
  );
}
