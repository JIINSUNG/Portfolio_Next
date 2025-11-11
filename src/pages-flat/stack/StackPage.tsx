import Image from "next/image";
import styles from "./StackPage.module.css";
import React from "react";
import {
  CSS,
  GitHubLight,
  GitLabLight,
  HTML,
  JavaScript,
  Jira,
  NextJSLight,
  ReactIcon,
  ReactQuery,
  Redux,
  TailWindLight,
  TypeScript,
  VSC,
  VueJSLight,
  WebStorm,
  Zustand,
} from "@/shared/assets/skill";
import Link from "next/link";

type SkillLink = {
  text: string;
  href: string;
};

type SkillData = {
  name: string;
  image: any;
  level: number;
  description: string;
  links?: SkillLink[];
};

const skillData: SkillData[] = [
  {
    name: "HTML",
    image: HTML,
    level: 85,
    description: "• 시멘틱 마크업과 웹 접근성을 고려한 구조 설계\n• SEO 최적화를 위한 메타 태그 및 구조화된 데이터 활용\n• Form 요소와 유효성 검사를 활용한 사용자 인터랙션 구현"
  },
  {
    name: "CSS",
    image: CSS,
    level: 85,
    description: "• Flexbox, Grid를 활용한 복잡한 레이아웃 구현\n• Media Query를 활용한 반응형 디자인 구축\n• CSS Animation과 Transition으로 인터랙티브 UI 제작"
  },
  {
    name: "Javascript",
    image: JavaScript,
    level: 80,
    description: "• ES6+ 문법을 활용한 모던 자바스크립트 개발\n• async/await, Promise로 비동기 처리 구현\n• DOM 조작 및 이벤트 핸들링을 통한 동적 웹 페이지 구현"
  },
  {
    name: "TypeScript",
    image: TypeScript,
    level: 75,
    description: "• 정적 타입 시스템으로 안정적인 코드 작성\n• Interface와 Type을 활용한 타입 정의 및 관리\n• Generic과 유틸리티 타입을 활용한 재사용 가능한 코드 작성"
  },
  {
    name: "React",
    image: ReactIcon,
    level: 85,
    description: "• Hooks를 활용한 효율적인 상태 관리 및 사이드 이펙트 처리\n• 컴포넌트 재사용성과 유지보수성을 고려한 설계\n• React Router를 활용한 SPA 구축 및 라우팅 관리"
  },
  {
    name: "VueJS",
    image: VueJSLight,
    level: 70,
    description: "• Composition API를 활용한 로직 재사용 및 관리\n• Pinia를 활용한 전역 상태 관리 구현\n• Props, Emit, Provide/Inject를 활용한 컴포넌트 간 통신"
  },
  {
    name: "NextJS",
    image: NextJSLight,
    level: 80,
    description: "• App Router를 활용한 최신 Next.js 프로젝트 구축\n• SSR, SSG, ISR을 적절히 활용한 성능 최적화\n• Server Components와 Client Components의 효율적 분리",
    links: [
      { text: "큐잉 프로젝트 보기", href: "/project/1" },
      { text: "쇼트닝 프로젝트 보기", href: "/project/3" }
    ]
  },
  {
    name: "ReactQuery",
    image: ReactQuery,
    level: 75,
    description: "• 서버 상태 관리 및 캐싱 전략 구현\n• Optimistic Update와 Mutation을 활용한 UX 개선\n• 실시간 데이터 동기화 및 자동 리페칭 구현",
    links: [{ text: "큐잉 프로젝트 보기", href: "/project/1" }]
  },
  {
    name: "Tailwind",
    image: TailWindLight,
    level: 80,
    description: "• Utility-First 접근 방식으로 빠른 UI 개발\n• 커스텀 테마와 설정을 통한 디자인 시스템 구축\n• 반응형 디자인을 위한 Breakpoint 활용"
  },
  {
    name: "Zustand",
    image: Zustand,
    level: 75,
    description: "• 심플한 API로 전역 상태 관리 구현\n• Middleware를 활용한 상태 영속화 및 로깅\n• 최소한의 리렌더링으로 성능 최적화",
    links: [{ text: "파인디어 프로젝트 보기", href: "/project/2" }]
  },
  {
    name: "Redux",
    image: Redux,
    level: 70,
    description: "• Redux Toolkit을 활용한 효율적인 상태 관리\n• Slice 패턴으로 모듈화된 상태 관리 구조 설계\n• Thunk와 RTK Query를 활용한 비동기 처리",
    links: [{ text: "단짠단짠 프로젝트 보기", href: "/project/4" }]
  },
  {
    name: "Jira",
    image: Jira,
    level: 70,
    description: "• 애자일 스프린트 기반 프로젝트 일정 관리\n• 이슈 트래킹과 우선순위 관리로 효율적인 태스크 수행\n• 스토리 포인트를 활용한 작업량 추정 및 협업"
  },
  {
    name: "WebStorm",
    image: WebStorm,
    level: 75,
    description: "• IntelliJ 기반 IDE의 강력한 기능 활용\n• 코드 리팩토링과 디버깅 도구를 통한 생산성 향상\n• Git 통합 기능을 활용한 버전 관리"
  },
  {
    name: "VSCode",
    image: VSC,
    level: 85,
    description: "• 다양한 익스텐션을 활용한 개발 환경 최적화\n• 단축키와 스니펫을 통한 빠른 코드 작성\n• Git, 터미널, 디버거 통합으로 올인원 개발 환경 구축"
  },
  {
    name: "GitHub",
    image: GitHubLight,
    level: 80,
    description: "• Git Flow, GitHub Flow 전략을 활용한 협업 경험\n• Pull Request 리뷰와 코드 품질 관리\n• GitHub Actions를 활용한 CI/CD 파이프라인 구축"
  },
  {
    name: "GitLab",
    image: GitLabLight,
    level: 75,
    description: "• GitLab CI/CD를 활용한 자동화된 배포 파이프라인 구축\n• 브랜치 전략과 머지 리퀘스트를 통한 코드 리뷰\n• Issue 관리와 Milestone을 활용한 프로젝트 추적"
  },
];

export default function StackPage() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Skills</h1>
        <p className={styles.hoverHint}>💡 각 스킬에 마우스를 올려보세요</p>
      </header>
      <main className={styles.content}>
        <ul className={styles.listContainer}>
          {skillData.map((skill, idx) => (
            <li key={idx} className={styles.listItem}>
              <div className={styles.tooltip}>
                <p className={styles.tooltipDescription}>{skill.description}</p>
                {skill.links && (
                  <div className={styles.tooltipLinks}>
                    {skill.links.map((link, linkIdx) => (
                      <Link key={linkIdx} href={link.href}>{link.text}</Link>
                    ))}
                  </div>
                )}
              </div>
              <Image src={skill.image} alt={skill.name} className={styles.skillImage} />
              <label className={styles.label}>{skill.name}</label>
              <div className={styles.levelBar}>
                <div className={styles.levelFill} style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className={styles.levelText}>{(skill.level / 10).toFixed(1)} / 10</span>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
