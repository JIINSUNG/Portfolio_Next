"use client";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [corporate, setCorporate] = useState<string>();
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>기업명</label>
          <input
            name={"corporate"}
            type="text"
            value={corporate}
            onChange={(e) => setCorporate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>성함</label>
          <input
            name={"name"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>전화번호</label>
          <input
            name={""}
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>이메일</label>
          <input
            name={"email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>메시지</label>
          <textarea
            name={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
      <button type="button" className={styles.submitBtn}>
        전송하기
      </button>
    </>
  );
}
