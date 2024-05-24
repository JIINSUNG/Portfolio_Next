import React from "react";
import styles from "./ProjectSection.module.css";
import { BentoCard } from "@/shared/components/BentoCard";
import {
  단짠단짠,
  쇼트닝,
  시크리또,
  큐잉,
  트리폴린,
  파인디어,
} from "@/shared/assets";
export default function ProjectSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>My Project</h1>
      </header>
      <main className={styles.projectSection}>
        <BentoCard
          id={1}
          src={큐잉}
          title={`누구나 적용한 대기열 시스템, ${"\n"} 큐잉`}
          stack={"FE(Next14, Typescript)"}
          duration={"2024-05-03~2024-06-02"}
        />
        <BentoCard
          id={2}
          src={파인디어}
          title={`통합 분실물 추천 플랫폼,${"\n"}  파인디어`}
          stack={"FE(React.js, Typescript, Zustand)"}
          duration={"2024-05-03~2024-06-02"}
        />
        <BentoCard
          id={3}
          src={시크리또}
          stack={`FE(Vue3, Typescript,${"\n"} Pinia)`}
          title={"온라인 마니또 서비스, 시크리또"}
          duration={"2024-05-03~2024-06-02"}
        />
        <BentoCard
          id={4}
          src={쇼트닝}
          stack={"FE(Next14, Typescript)"}
          title={"심플한 URL 단축기, 쇼트닝"}
          duration={"2024-05-03~2024-06-02"}
        />
        <BentoCard
          id={5}
          src={트리폴린}
          stack={"FE(Vue3, Javascript, Pinia)"}
          title={`여행 추천 서비스, Tripoline`}
          duration={"2024-05-03~2024-06-02"}
        />
        <BentoCard
          id={6}
          src={단짠단짠}
          stack={"FE(React.js, Javascript, Redux)"}
          title={`대학생 안전 매칭 서비스, ${"\n"}단짠단짠`}
          duration={"2024-05-03~2024-06-02"}
        />
      </main>
    </section>
  );
}
