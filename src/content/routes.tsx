import { LandingPage } from "@/pages/landing-page";
import { PlaygroundPage } from "@/pages/playground-page";

export const routes = [
  {
    path: "/",
    element: LandingPage,
  },
  {
    path: "/playground",
    element: PlaygroundPage,
  }
];