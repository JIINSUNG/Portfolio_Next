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
              안녕하세요, 프론트엔드 개발자 <br />
              지인성 입니다.
            </h1>
            <h2 className={styles.middleTitle}>저는 이런 사람 입니다.</h2>
            <p>
              ✅ 성장을 위한 새로운 기술과 도전을 두려워하지 않습니다.
              <br />
              <br />✅ 동료들과 서비스를 만들어가고 문제를 해결하는 과정을
              즐깁니다.
              <br />
              <br />✅
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
