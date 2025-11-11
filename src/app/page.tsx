import { AboutSection } from "@/pages-flat/about";
import { ProjectSection } from "@/pages-flat/project";
import { StackPage } from "@/pages-flat/stack";
import { HeroSection } from "@/pages-flat/onBoarding/Hero";
import { SpaceBackground } from "@/shared/components/SpaceBackground";

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <StackPage />
    </>
  );
}
