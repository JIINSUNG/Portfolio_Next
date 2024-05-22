"use client";
import styles from "./ContactForm.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;
    try {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_MAIL_SERVICE_KEY,
          process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY,
          form.current,
          process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
        )
        .then(() => {
          Swal.fire({
            title: "전송 성공!",
            text: "정상적으로 접수되었습니다.",
            icon: "success",
          });
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "전송 실패",
        text: "접수 중 에러가 발생하였습니다.",
      });
    }
  };

  return (
    <>
      <form ref={form} onSubmit={onSubmitForm} className={styles.form}>
        <div className={styles.formGroup}>
          <label>
            기업명<span>*</span>
          </label>
          <input title="corporate" name="from_corporate" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label>
            성함<span>*</span>
          </label>
          <input title="name" name="from_name" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label>
            전화번호<span>*</span>
          </label>
          <input title="tel" name="from_tel" type="text" required />
        </div>
        <div className={styles.formGroup}>
          <label>
            이메일<span>*</span>
          </label>
          <input title="email" name="from_email" type="email" required />
        </div>
        <div className={styles.formGroup}>
          <label>
            메시지<span>*</span>
          </label>
          <textarea title="message" name="message" required />
        </div>
        <button type="submit" className={styles.submitBtn}>
          전송하기
        </button>
      </form>
    </>
  );
}
