import type { Route } from "./+types/home";
import Hero from "~/components/organism/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Podalyze" },
    { name: "description", content: "Analyze your podcast Viewership!" },
  ];
}

export default function Home() {
  return <Hero />;
}
