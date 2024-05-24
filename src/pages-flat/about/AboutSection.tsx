import React from "react";
import styles from "./AboutSection.module.css";
import { email } from "@/shared/assets";
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
              안녕하세요, 프런트앤드 개발자 <br />
              지인성 입니다.
            </h1>
            <p>
              저의 사이트에 방문해주셔서 감사합니다.저의 사이트에 방문해주셔서
              감사합니다.저의 사이트에 방문해주셔서 감사합니다.저의 사이트에
              방문해주셔서 감사합니다.저의 사이트에 방문해주셔서 감사합니다.저의
              사이트에 방문해주셔서 감사합니다.저의 사이트에 방문해주셔서
              감사합니다.저의 사이트에 방문해주셔서 감사합니다.
            </p>
          </div>
        </div>
        <div className={styles.profile}>
          {/* image section */}
          <div className={styles.imageSection}>
            <Image src={email} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
