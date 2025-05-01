import { Button } from "../ui/button";

interface LoginButtonProps {
    text: string;
}

export default function LoginButton({text}: LoginButtonProps) {
  return (
    <Button className="bg-transparent text-black border-2 border-black hover:bg-transparent font-semibold">
        {text}
    </Button>
  )
}

