import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <main className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h2>안녕하세요,</h2>
            <h1>프론트엔드 개발자 지인성입니다.</h1>
          </div>
          <div className={styles.description}>
            <div className={styles.descItem}>
              <span className={styles.icon}>🚀</span>
              <p>성장을 위한 새로운 기술 학습과 도전을 두려워하지 않습니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>💎</span>
              <p>사용자 중심의 접근 방식을 중요하게 생각하며, 좋은 사용자 경험을 제공하기 위해 노력합니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>🤝</span>
              <p>팀워크와 협업을 통해 더 나은 결과를 만들어내는 것을 목표로 합니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>💬</span>
              <p>열린 소통과 피드백을 통해 함께 발전하는 문화를 지향합니다.</p>
            </div>
          </div>
        </div>
      </main>
      <section className={styles.eachSection}>
        <header className={styles.header}>
          <h1>Certificate / Awards</h1>
        </header>
        <main className={styles.certificate}>
          <ul>
            <li>📜 2023.12.15 SQLD (한국데이터산업진흥원)</li>
            <li>
              🏆 2023.11.24 삼성 청년 SW 아카데미 10기 1학기 프로젝트 최우수상
            </li>
            <li>📜 2022.11.25 정보처리기사 (한국산업인력공단)</li>
          </ul>
        </main>
      </section>
      <section className={styles.eachSection}>
        <header className={styles.header}>
          <h1>Education / Experience</h1>
        </header>

        <main className={styles.education}>
          <ul>
            <li>💻 2023.07 ~ 삼성 청년 SW 아카데미 10기</li>
            <li>💻 2015.03 ~ 2022.02 단국대학교 소프트웨어 공학과 </li>
          </ul>
        </main>
      </section>
    </section>
  );
}
