"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <section className={styles.section}>
      <main className={styles.line}>
        <h1
          className={styles.leftHeader}
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          Hello,
        </h1>
      </main>
      <main className={styles.line}>
        <h1
          className={styles.leftHeader}
          style={{
            transform: `translateX(${position}px)`,
          }}
        >
          I&apos;m
        </h1>
      </main>
      <main className={styles.line}>
        <h1
          className={styles.rightHeader}
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          Insung
        </h1>
      </main>
      <main className={styles.line}>
        <p
          className={styles.leftParagraph}
          style={{
            transform: `translateX(${position}px)`,
          }}
        >
          Frontend
        </p>
      </main>
      <main className={styles.line}>
        <p
          className={styles.rightParagraph}
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          Developer
        </p>
      </main>
    </section>
  );
}
