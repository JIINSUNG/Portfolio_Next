import React from "react";
import styles from "./ContactSection.module.css";
import Image from "next/image";
import { email } from "@/shared/assets";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <header className={styles.header}>
        <h1>CONTACT</h1>
        <p>저에게 관심을 가져주셔서 감사합니다.</p>
        <p>아래 이메일로 연락 주시면</p>
        <p>정성껏 답변드릴 수 있도록 하겠습니다!</p>
      </header>
      <main className={styles.content}>
        <div className={styles.imageSection}>
          <Image src={email} alt={"contact"} />
        </div>
        <div className={styles.formSection}>
          <div className={styles.emailInfo}>
            <h2>📧 Email</h2>
            <a href="mailto:crm03008@gmail.com" className={styles.emailLink}>
              crm03008@gmail.com
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
