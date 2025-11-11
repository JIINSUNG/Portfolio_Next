import React from "react";
import styles from "./ProjectSection.module.css";
import { BentoCard } from "@/shared/components/BentoCard";
import { projects } from "@/shared/assets";
import Link from "next/link";

type ProjectSectionProps = {
  preview?: boolean;
};

export default function ProjectSection({ preview }: ProjectSectionProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>My Project</h1>
      </header>
      <main className={styles.projectSection}>
        {projects.map((project) => (
              <BentoCard
                key={project.id}
                {...project}
              />
            ))}
      </main>
    </section>
  );
}
