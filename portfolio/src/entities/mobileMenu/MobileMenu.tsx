"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./MobileMenu.module.css";
import { MenuContext } from "@/shared/context/MenuProvider";
import Link from "next/link";
import { LinkButton } from "@/shared/components";

const MobileMenu = () => {
  const context = useContext(MenuContext);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={menuRef}
      className={context.menuOpen ? styles.menu : styles.disappear}
      onClick={() => context.setMenuOpen((prev: boolean) => !prev)}
    >
      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>
          About Me
        </Link>
        <Link href="/project" className={styles.link}>
          Project
        </Link>
        <Link href="/stack" className={styles.link}>
          Stack
        </Link>
        <Link href="/inquiry" className={styles.link}>
          Inquiry
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
