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
  NextJSDark,
  NextJSLight,
  ReactDark,
  ReactIcon,
  ReactLight,
  ReactQuery,
  Redux,
  TailWindDark,
  TailWindLight,
  TypeScript,
  VSC,
  VueJSLight,
  WebStorm,
  Zustand,
} from "@/shared/assets/skill";
import Link from "next/link";

export default function StackPage() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Skills</h1>
      </header>
      <main className={styles.content}>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              HTML 구조 이해 및 다양한 태그 사용 가능
              <br />
              <br />
              SEO 최적화 및 폼 요소 활용 가능
              <br />
              <br />
              시멘틱 태그를 활용한 웹 접근성 고려한 마크업 가능
            </p>
            <Image src={HTML} alt="HTML" className={styles.skillImage} />
            <label className={styles.label}>HTML</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              CSS의 구조 이해 및 다양한 속성 사용 가능
              <br />
              <br />
              Flexbox, Grid Layout 활용 가능
              <br />
              <br />
              media query를 활용한 반응형 웹 구현 가능
            </p>
            <Image src={CSS} alt="CSS" className={styles.skillImage} />
            <label className={styles.label}>CSS</label>
          </li>

          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              ES6+ 를 이해하고 이를 활용한 프로젝트 진행가능
              <br />
              <br />
              async, await, Promise를 활용한 비동기 처리
              <br />
              <br />
              Arrow Function을 활용한 함수 작성 가능
            </p>
            <Image
              src={JavaScript}
              alt="Javascript"
              className={styles.skillImage}
            />
            <label className={styles.label}>Javascript</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              ES6+ 를 이해하고 이를 활용한 프로젝트 진행가능
              <br />
              <br />
              정적 타입명시를 활용한 생산성 높은 개발 가능
            </p>
            <Image
              src={TypeScript}
              alt="TypeScript"
              className={styles.skillImage}
            />
            <label className={styles.label}>TypeScript</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              React Router를 활용한 소규모 프로젝트 진행 가능
              <br />
              <br />
              React Hooks를 활용한 상태관리, 최적화, 사이드 이펙트 처리 가능
              <br />
              <br />
              컴포넌트의 개념을 이해하고, 재사용성을 고려한 설계 및 개발 가능
            </p>
            <Image src={ReactIcon} alt="React" className={styles.skillImage} />
            <label className={styles.label}>React</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              Vue Router를 활용한 소규모 프로젝트 진행이 가능.
              <br />
              <br />
              Provide, Inject, Props, Emit, Pinia 등을 활용한 데이터 상태관리
              가능
              <br />
              <br />
              컴포넌트의 개념을 이해하고, 재사용성을 고려한 설계 및 개발 가능
            </p>
            <Image src={VueJSLight} alt="VueJS" className={styles.skillImage} />
            <label className={styles.label}>VueJS</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              SSR, CSR 을 이해하고 Next.js를 활용해 적용 가능
              <br />
              <br />
              App Router를 활용한 프로젝트 진행 가능
              <br />
              <br />
              <Link href="/project/1">큐잉 바로가기</Link> &nbsp;
              <Link href="/project/3">쇼트닝 바로가기</Link>
            </p>
            <Image
              src={NextJSLight}
              alt="NextJS"
              className={styles.skillImage}
            />
            <label className={styles.label}>NextJS</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              React Query를 활용한 서버 데이터 상태관리, 관련훅 작성 가능
              <br />
              <br />
              '큐잉' 프로젝트에서 모니터링 및 서버 데이터를 관리하는데 사용
              <br />
              <br />
              <Link href="/project/1">큐잉 바로가기</Link>
            </p>
            <Image
              src={ReactQuery}
              alt="ReactQuery"
              className={styles.skillImage}
            />
            <label className={styles.label}>ReactQuery</label>
          </li>

          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              Tailwind base, components, utilities 활용한 재사용성 높은 스타일
              작성 가능
              <br />
              <br />
              Tailwind의 break point를 활용한 반응형 컴포넌트 작성 가능
            </p>
            <Image
              src={TailWindLight}
              alt="Tailwind"
              className={styles.skillImage}
            />
            <label className={styles.label}>Tailwind</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              Zustand를 활용한 전역적 상태관리 가능, 이를 활용한 프로젝트를 진행
              경험
              <br />
              <br />
              '파인디어' 프로젝트에서 사용자 데이터를 관리하는데 사용
              <br />
              <br />
              <Link href="/project/2">파인디어 바로가기</Link>
            </p>
            <Image src={Zustand} alt="Zustand" className={styles.skillImage} />
            <label className={styles.label}>Zustand</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              ReduxToolkit을 활용한 전역적 상태관리, 이를 활용한 프로젝트를
              진행가능
              <br />
              <br />
              Redux를 사용한 프로젝트: 단짠단짠
              <br />
              <br />
              <Link href="/project/4">단짠단짠 바로가기</Link>
            </p>
            <Image src={Redux} alt="Redux" className={styles.skillImage} />
            <label className={styles.label}>Redux</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              지라를 활용한 프로젝트 일정관리 가능
              <br />
              <br />
              이슈, 스토리 포인트를 활용한 프로젝트 협업 경험
            </p>
            <Image src={Jira} alt="Jira" className={styles.skillImage} />
            <label className={styles.label}>Jira</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              아파치 웹스톰을 활용한 프론트엔드 웹개발 가능
            </p>
            <Image
              src={WebStorm}
              alt="WebStorm"
              className={styles.skillImage}
            />
            <label className={styles.label}>WebStorm</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              Visual Studio Code를 활용한 프론트엔드 웹개발 가능
            </p>
            <Image src={VSC} alt="VSC" className={styles.skillImage} />
            <label className={styles.label}>VSCode</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              깃허브를 활용한 프로젝트 형상관리 가능
              <br />
              <br />
            </p>
            <Image
              src={GitHubLight}
              alt="GitHub"
              className={styles.skillImage}
            />
            <label className={styles.label}>GitHub</label>
          </li>
          <li className={styles.listItem}>
            <p className={styles.tooltip}>
              깃랩을 활용해 프로젝트 형상관리가 가능
            </p>
            <Image
              src={GitLabLight}
              alt="GitLab"
              className={styles.skillImage}
            />
            <label className={styles.label}>GitLab</label>
          </li>
        </ul>
      </main>
    </section>
  );
}
