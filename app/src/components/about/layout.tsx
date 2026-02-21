import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "About Us — SkillLift Education",
  description: "Learn about SkillLift Education — our mission, vision, team and story across New Zealand and Sri Lanka.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}