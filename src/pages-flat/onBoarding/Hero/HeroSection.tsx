"use client";
import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const leftHeaderRef = useRef<HTMLHeadingElement>(null);
  const rightHeaderRef = useRef<HTMLHeadingElement>(null);
  const leftParagraphRef = useRef<HTMLParagraphElement>(null);
  const rightParagraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 0.8;

      // 스크롤에 따라 opacity 계산 (0 ~ maxScroll 범위에서 1 -> 0)
      const opacity = Math.max(0, 1 - scrollY / maxScroll);

      if (leftHeaderRef.current) {
        leftHeaderRef.current.style.opacity = `${opacity}`;
      }
      if (rightHeaderRef.current) {
        rightHeaderRef.current.style.opacity = `${opacity}`;
      }
      if (leftParagraphRef.current) {
        leftParagraphRef.current.style.opacity = `${opacity}`;
      }
      if (rightParagraphRef.current) {
        rightParagraphRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={styles.section}>
      <main className={styles.line}>
        <h1 ref={leftHeaderRef} className={styles.leftHeader}>
          Hello, I&apos;m
        </h1>
      </main>
      <main className={styles.line}>
        <h1 ref={rightHeaderRef} className={styles.rightHeader}>
          Insung
        </h1>
      </main>
      <main className={styles.line}>
        <p ref={leftParagraphRef} className={styles.leftParagraph}>
          Frontend
        </p>
      </main>
      <main className={styles.line}>
        <p ref={rightParagraphRef} className={styles.rightParagraph}>
          Developer
        </p>
      </main>
    </section>
  );
}
