import styles from "./StackPage.module.css";
import React from "react";

export default function StackPage() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Skills</h1>
      </header>
      <main className={styles.content}>
        {/* frontend */}
        <ul className={styles.listContainer}>
          <li className={styles.labelTitle}>Frontend</li>
          <li className={styles.listItem}>
            <label>Javascript</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Typescript</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Vue3</label>
            <div>
              <span className={styles.gauge50}>50%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>React.js</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>React Native</label>
            <div>
              <span className={styles.gauge50}>50%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Next14</label>
            <div>
              <span className={styles.gauge60}>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Tailwind</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>StyledComponent</label>
            <div>
              <span className={styles.gauge60}>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Axios</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Tanstack Query</label>
            <div>
              <span className={styles.gauge60}>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Zustand</label>
            <div>
              <span className={styles.gauge60}>60%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Redux Toolkit</label>
            <div>
              <span className={styles.gauge60}>60%</span>
            </div>
          </li>
        </ul>

        {/* backend */}
        <ul className={styles.listContainer}>
          <li className={styles.labelTitle}>Backend</li>
          <li className={styles.listItem}>
            <label>Spring</label>
            <div>
              <span className={styles.gauge20}>20%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>Spring Boot</label>
            <div>
              <span className={styles.gauge20}>20%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>PHP</label>
            <div>
              <span className={styles.gauge20}>20%</span>
            </div>
          </li>
        </ul>

        {/* 형상관리 등 */}
        <ul className={styles.listContainer}>
          <li className={styles.labelTitle}>ETC</li>
          <li className={styles.listItem}>
            <label>JIRA</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>MatterMost</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>GITHUB</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>GITLAB</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>VSCode</label>
            <div>
              <span className={styles.gauge70}>70%</span>
            </div>
          </li>
          <li className={styles.listItem}>
            <label>WebStorm</label>
            <div>
              <span className={styles.gauge50}>50%</span>
            </div>
          </li>
        </ul>
      </main>
    </section>
  );
}
