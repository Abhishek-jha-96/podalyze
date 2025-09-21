import { ArrowBigLeft, PenOffIcon } from "lucide-react";
import { NavLink } from "react-router";
import { Card, CardContent } from "~/components/ui/card";

export default function subscription() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <NavLink
        className="flex items-center absolute top-3 left-3 text-md"
        to="/"
        end
      >
        <ArrowBigLeft></ArrowBigLeft>
        <p>Home</p>
      </NavLink>
      <Card className="p-10">
        <CardContent className="flex flex-col justify-center items-center gap-5">
          <PenOffIcon size={80} color="gray" opacity={0.5}/>
          <p className="text-xl font-mono font-semibold text-neutral-700">Subscriptions will be added soon...</p>
        </CardContent>  
      </Card>    
    </div>
  );
}
