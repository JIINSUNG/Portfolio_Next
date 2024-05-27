import Image from "next/image";
import styles from "./page.module.css";
import { AboutSection } from "@/pages-flat/about";
import { ProjectSection } from "@/pages-flat/project";
import { StackPage } from "@/pages-flat/stack";
import { HeroSection } from "@/pages-flat/onBoarding/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection preview={true} />
      <StackPage />
    </>
  );
}
