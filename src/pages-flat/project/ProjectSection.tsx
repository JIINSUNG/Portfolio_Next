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
        {preview
          ? projects
              .slice(0, 4)
              .map((project) => (
                <BentoCard
                  key={project.id}
                  id={project.id}
                  src={project.src}
                  title={project.title}
                  stack={project.stack}
                  duration={project.duration}
                  myStack={project.myStack}
                  team={project.team}
                />
              ))
          : projects.map((project) => (
              <BentoCard
                key={project.id}
                id={project.id}
                src={project.src}
                title={project.title}
                stack={project.stack}
                duration={project.duration}
                myStack={project.myStack}
                team={project.team}
              />
            ))}
      </main>
      {preview && (
        <footer className={styles.footer}>
          <Link href="/project">
            <button type="button">더 보기</button>
          </Link>
        </footer>
      )}
    </section>
  );
}
