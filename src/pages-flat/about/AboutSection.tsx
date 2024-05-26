import React from "react";
import styles from "./AboutSection.module.css";
import { profile } from "@/shared/assets";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <div className={styles.hero}>
        <div className={styles.about}>
          <div className={styles.content}>
            <h1>
              안녕하세요, 웹 프론트엔드 개발자 <br />
              지인성 입니다.
            </h1>
            <p>
              대학 졸업 후, HTML, CSS, JS의 기본 지식을 바탕으로 학부 동기들과
              함께 대학생 안전 매칭 서비스인 &apos;단짠단짠&apos; 프로젝트를
              시작으로 프론트엔드 개발 분야에 본격적으로 뛰어들었습니다.
              <br />
              <br />
              프론트엔드 개발자로서의 전문성을 갖추기 위해 React, Vue와 같은
              프론트엔드 프레임워크 및 라이브러리를 학습하고 이와 관련된
              프로젝트를 경험하였습니다.
              <br />
              <br />
              더 나은 개발자로 성장 하기 위하여 삼성 청년 아카데미 10기에
              입과하여, 실무 적인 경험을 습득하고, 팀원들과 협력하여 문제를
              해결하는 과정에서 협업 능력도 크게 향상되었습니다. 이러한 경험을
              바탕으로 현업에서도 효율적이고 창의적으로 기여할 수 있는 자신감을
              갖게 되었습니다.
              <br />
              <br />
              새로운 기술과 도전을 두려워하지 않으며, 사용자 경험과 좋은 코드를
              위해 고민하고 다양한 웹 기술을 적용하며 성장하기 위해 지속적인
              노력을 하고 있습니다.
            </p>
          </div>
        </div>
        <div className={styles.profile}>
          {/* image section */}
          <div className={styles.imageSection}>
            <Image src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
