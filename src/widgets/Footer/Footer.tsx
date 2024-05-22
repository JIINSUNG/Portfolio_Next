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
        <li className={styles.menu}>
          <GitHubIcon className={styles.item} />
        </li>
        <li className={styles.menu}>
          <LaptopIcon className={styles.item} />
        </li>
        <li className={styles.menu}>
          <AccountCircleIcon className={styles.item} />
        </li>
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
      <p className={styles.paragraph}>문의 : crm03008@gmail.com</p>
      <h1 className={styles.author}>JIINSUNG</h1>
    </footer>
  );
}
