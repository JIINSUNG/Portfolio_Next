import styles from "./StackPage.module.css";
import React from "react";

export default function StackPage() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Stack</h1>
      </header>
      <main className={styles.content}>
        {/* frontend */}
        <ul className={styles.listContainer}>
          <label className={styles.labelTitle}>Frontend</label>
          <li className={styles.listItem}>
            <label>HTML</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li>
            <li className={styles.listItem}>
              <label>CSS</label>
              <div></div>
            </li>
          </li>
          <li className={styles.listItem}>
            <label>Javascript</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Typescript</label>
            <div></div>
          </li>
          <li>
            <li className={styles.listItem}>
              <label>Vue.js</label>
              <div></div>
            </li>
          </li>
          <li className={styles.listItem}>
            <label>React.js</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Next.js</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Tailwind</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>StyledComponent</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Zustand</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Redux Toolkit</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Pinia</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>React Query</label>
            <div></div>
          </li>
        </ul>

        {/* backend */}
        <ul className={styles.listContainer}>
          <label className={styles.labelTitle}>Backend</label>
          <li className={styles.listItem}>
            <label>Spring</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>Spring Boot</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>PHP</label>
            <div></div>
          </li>
        </ul>

        {/* 형상관리 등 */}
        <ul className={styles.listContainer}>
          <label className={styles.labelTitle}>ETC</label>
          <li className={styles.listItem}>
            <label>JIRA</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>MatterMost</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>GITHUB</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>GITLAB</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>VisualStudioCode</label>
            <div></div>
          </li>
          <li className={styles.listItem}>
            <label>WebStorm</label>
            <div></div>
          </li>
        </ul>
      </main>
    </section>
  );
}
