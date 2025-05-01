import { Button } from "../ui/button";
import { NavLink } from "react-router";

interface LoginButtonProps {
    text: string;
    path: string;
}

export default function LoginButton({text, path}: LoginButtonProps) {
  return (
    <Button className="bg-transparent text-black border-2 border-black hover:bg-transparent font-semibold">
      <NavLink to={path} end>
        {text}
      </NavLink>
    </Button>
  )
}

