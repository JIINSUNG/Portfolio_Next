import Image from "next/image";
import styles from "./page.module.css";
import { AboutSection } from "@/pages-flat/about";
import { ProjectSection } from "@/pages-flat/project";
import { StackPage } from "@/pages-flat/stack";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ProjectSection preview={true} />
      <StackPage />
    </>
  );
}
