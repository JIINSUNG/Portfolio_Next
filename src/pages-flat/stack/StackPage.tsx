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
          <li className={styles.labelTitle}>Frontend</li>
          <li className={styles.listItem}>
            <label>HTML</label>
            <div>
              <span>70%</span>
            </div>
          </li>
          <li>
            <li className={styles.listItem}>
              <label>CSS</label>
              <div>
                <span>60%</span>
              </div>
            </li>
          </li>
          <li className={styles.listItem}>
            <label>Javascript</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Typescript</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li>
            <li className={styles.listItem}>
              <label>Vue.js</label>
              <div>
                <span>60%</span>
              </div>
            </li>
          </li>
          <li className={styles.listItem}>
            <label>React.js</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Next.js</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Tailwind</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>StyledComponent</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Zustand</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Redux Toolkit</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Pinia</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>React Query</label>
            <div>
              <span>60%</span>
            </div>
          </li>
        </ul>

        {/* backend */}
        <ul className={styles.listContainer}>
          <li className={styles.labelTitle}>Backend</li>
          <li className={styles.listItem}>
            <label>Spring</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Spring Boot</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>PHP</label>
            <div>
              <span>60%</span>
            </div>
          </li>
        </ul>

        {/* 형상관리 등 */}
        <ul className={styles.listContainer}>
          <li className={styles.labelTitle}>ETC</li>
          <li className={styles.listItem}>
            <label>JIRA</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>MatterMost</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>GITHUB</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>GITLAB</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>VisualStudioCode</label>
            <div>
              <span>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>WebStorm</label>
            <div>
              <span>60%</span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}
