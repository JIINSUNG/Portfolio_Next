import React from "react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
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
              <span className={styles.icon}>⚡</span>
              <p>성능 최적화에 관심이 많습니다. Lighthouse 점수 62 → 94 달성, FCP 4.2s → 2.1s 개선 등 숫자로 증명되는 결과를 추구합니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>🔄</span>
              <p>사용자 피드백을 서비스에 반영하는 과정을 즐깁니다. 실서비스 운영 중 발견한 버그를 즉시 수정 배포하고, 반응형 이슈를 지속적으로 개선한 경험이 있습니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>🏗️</span>
              <p>FSD, Atomic Design 등 유지보수하기 좋은 구조 설계를 중요하게 생각합니다. 컴포넌트 재사용률 40% → 65% 향상 등 구조가 팀 생산성에 직결됨을 경험했습니다.</p>
            </div>
            <div className={styles.descItem}>
              <span className={styles.icon}>🤝</span>
              <p>팀장으로 5회 스프린트를 운영하며 기획부터 배포까지 전 사이클을 경험했습니다. 소통과 일정 관리가 개발만큼 중요하다는 것을 알고 있습니다.</p>
            </div>
          </div>
        </div>
      </main>
      <section className={styles.eachSection}>
        <header className={styles.header}>
          <h1>Awards / Certificates</h1>
        </header>
        <main className={styles.certificate}>
          <ul>
            <li>
              <div className={styles.date}>📜 2025.09.26</div>
              <div className={styles.content}>
                웹디자인개발기능사 (한국산업인력공단)
              </div>
            </li>
            <li>
              <div className={styles.date}>📜 2025.08.22</div>
              <div className={styles.content}>
                한국사 능력 검정시험 1급 (국사편찬위원회)
              </div>
            </li>
            <li>
              <div className={styles.date}>📜 2025.03.24</div>
              <div className={styles.content}>OPIC IM2 (ACTFL)</div>
            </li>
            <li>
              <div className={styles.date}>📜 2023.12.15</div>
              <div className={styles.content}>SQLD (데이터자격검정)</div>
            </li>
            <li>
              <div className={styles.date}>🏆 2023.11.24</div>
              <div className={styles.content}>
                삼성 청년 SW 아카데미 10기 1학기 프로젝트 최우수상
                (삼성전자주식회사)
              </div>
            </li>
            <li>
              <div className={styles.date}>📜 2023.08.28</div>
              <div className={styles.content}>
                삼성 SW알고리즘 역량테스트 모의 A형 취득
              </div>
            </li>
            <li>
              <div className={styles.date}>📜 2022.11.25</div>
              <div className={styles.content}>
                정보처리기사 (한국산업인력공단)
              </div>
            </li>
          </ul>
        </main>
      </section>
      <section className={styles.eachSection}>
        <header className={styles.header}>
          <h1>Education / Experience</h1>
        </header>

        <main className={styles.education}>
          <ul>
            <li>💻 2023.07 ~ 2024.07 삼성 청년 SW 아카데미 10기 수료</li>
            <li>💻 2015.03 ~ 2022.02 단국대학교 소프트웨어 공학과 </li>
          </ul>
        </main>
      </section>
    </section>
  );
}
