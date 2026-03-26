import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.linksSection}>
        <h3 className={styles.sectionTitle}>외부 링크</h3>
        <ul className={styles.menubar}>
          <Link href="https://github.com/JIINSUNG" target="_blank" rel="noopener noreferrer">
            <li className={styles.menu} title="GitHub">
              <GitHubIcon className={styles.item} />
            </li>
          </Link>
          <Link href="https://www.linkedin.com/in/인성-지-a4922a2a8" target="_blank" rel="noopener noreferrer">
            <li className={styles.menu} title="LinkedIn">
              <LinkedInIcon className={styles.item} />
            </li>
          </Link>
          <Link href="https://velog.io/@crm03008" target="_blank" rel="noopener noreferrer">
            <li className={styles.menu} title="Blog">
              <ArticleIcon className={styles.item} />
            </li>
          </Link>
        </ul>
      </section>
      <section className={styles.linksSection}>
        <h3 className={styles.sectionTitle}>빠른 이동</h3>
        <ul className={styles.menubar}>
          <Link href="/#project">
            <li className={styles.menu} title="프로젝트">
              <LaptopIcon className={styles.item} />
            </li>
          </Link>
          <Link href="/#about">
            <li className={styles.menu} title="소개">
              <AccountCircleIcon className={styles.item} />
            </li>
          </Link>
          <Link href="/#contact">
            <li className={styles.menu} title="연락하기">
              <EmailIcon className={styles.item} />
            </li>
          </Link>
        </ul>
      </section>
      <section className={styles.copyright}>
        <p className={styles.paragraph}>Copyright&copy; 2024 지인성.</p>
        <p className={styles.paragraph}>All Rights Reserved.</p>
      </section>
      <h1 className={styles.author}>JIINSUNG</h1>
    </footer>
  );
}
