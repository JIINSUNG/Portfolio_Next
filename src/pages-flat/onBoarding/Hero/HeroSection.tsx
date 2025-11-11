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
      const scrollFactor = scrollY * 0.5;

      if (leftHeaderRef.current) {
        leftHeaderRef.current.style.transform = `translate3d(${-scrollFactor}px, 0, 0)`;
      }
      if (rightHeaderRef.current) {
        rightHeaderRef.current.style.transform = `translate3d(${scrollFactor}px, 0, 0)`;
      }
      if (leftParagraphRef.current) {
        leftParagraphRef.current.style.transform = `translate3d(${-scrollFactor}px, 0, 0)`;
      }
      if (rightParagraphRef.current) {
        rightParagraphRef.current.style.transform = `translate3d(${scrollFactor}px, 0, 0)`;
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
