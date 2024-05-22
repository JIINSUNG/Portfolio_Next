"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { LinkButton } from "@/shared/components";
import { HamburgerMenu } from "@/entities/hamburgerMenu";
import { useContext } from "react";
import { MenuContext } from "@/shared/context/MenuProvider";
export default function Header() {
  const context = useContext(MenuContext);
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={context.menuOpen ? styles.active : styles.name}>
          JIINSUNG
        </h1>
      </Link>
      <ul className={styles.headerMenu}>
        <li>
          <LinkButton href="/about" title="About Me" />
        </li>
        <li>
          <LinkButton href="/project" title="Project" />
        </li>
        <li>
          <LinkButton href="/stack" title="Stack" />
        </li>
        <li>
          <LinkButton href="/contact" title="Contact" />
        </li>
      </ul>
      <HamburgerMenu />
    </header>
  );
}
