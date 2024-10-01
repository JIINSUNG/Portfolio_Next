import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaptopIcon from "@mui/icons-material/Laptop";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.menubar}>
        <Link href="https://github.com/JIINSUNG" target="_blank">
          <li className={styles.menu}>
            <GitHubIcon className={styles.item} />
          </li>
        </Link>
        <Link href="/project">
          <li className={styles.menu}>
            <LaptopIcon className={styles.item} />
          </li>
        </Link>
        <Link href="about">
          <li className={styles.menu}>
            <AccountCircleIcon className={styles.item} />
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className={styles.menu}>
            <EmailIcon className={styles.item} />
          </li>
        </Link>
      </ul>
      <section className={styles.copyright}>
        <p className={styles.paragraph}>Copyright&copy; 2024 지인성.</p>
        <p className={styles.paragraph}>All Rights Reserved.</p>
      </section>
      <h1 className={styles.author}>JIINSUNG</h1>
    </footer>
  );
}
