import { ArrowBigLeft } from "lucide-react";
import { LoginForm } from "../molecule/LoginForm";
import { NavLink } from "react-router";

export default function LoginPage() {
  return (
    <div className="bg-[url(/bg-2.png)] bg-cover bg-center min-h-screen flex w-full items-center justify-center p-6 md:p-10">
      <NavLink
        className="flex items-center absolute top-3 left-3 text-md"
        to="/"
        end
      >
        <ArrowBigLeft></ArrowBigLeft>
        <p>Home</p>
      </NavLink>

      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
