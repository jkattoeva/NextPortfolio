import type { Metadata } from "next";
import AboutClient from "./page.uc";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return <AboutClient />;
}
