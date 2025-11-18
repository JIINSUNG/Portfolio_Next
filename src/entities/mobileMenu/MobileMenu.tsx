"use client";
import React, { useContext, useRef } from "react";
import styles from "./MobileMenu.module.css";
import { MenuContext } from "@/shared/context/MenuProvider";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const MobileMenu = () => {
  const context = useContext(MenuContext);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={menuRef}
      className={context.menuOpen ? styles.menu : styles.disappear}
    >
      <div className={styles.closeButton}>
        <CloseIcon
          onClick={() => context.setMenuOpen(false)}
          className={styles.closeIcon}
        />
      </div>
      <nav className={styles.nav}>
        <Link
          href="/#about"
          onClick={() => {
            context.setMenuOpen(false);
          }}
          className={styles.link}
        >
          About Me
        </Link>
        <Link
          onClick={() => {
            context.setMenuOpen(false);
          }}
          href="/#project"
          className={styles.link}
        >
          Project
        </Link>
        <Link
          onClick={() => {
            context.setMenuOpen(false);
          }}
          href="/#skills"
          className={styles.link}
        >
          Skills
        </Link>
        <Link
          onClick={() => {
            context.setMenuOpen(false);
          }}
          href="/#contact"
          className={styles.link}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
