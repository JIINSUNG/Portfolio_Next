import React from "react";
import styles from "./ContactSection.module.css";
import { ContactForm } from "@/entities/contactForm";
import Image from "next/image";
import { email } from "@/shared/assets";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>CONTACT</h1>
        <p>저에게 관심을 가져주셔서 감사합니다.</p>
        <p>문의 내용을 아래 입력란에 작성 후 보내주시면</p>
        <p>정성껏 답변드릴 수 있도록 하겠습니다!</p>
      </header>
      <main className={styles.content}>
        <div className={styles.imageSection}>
          <Image src={email} alt={"contact"} />
        </div>
        <div className={styles.formSection}>
          <ContactForm />
        </div>
      </main>
    </section>
  );
}
