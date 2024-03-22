import type { Metadata } from "next";
import IntroClient from "./page.uc";

export const metadata: Metadata = { title: "Intro" };

export default function Intro() {
  return <IntroClient />;
}
