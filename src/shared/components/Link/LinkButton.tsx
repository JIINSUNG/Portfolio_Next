"use client";

import Link from "next/link";
import styles from "./Link.module.css";
import { usePathname } from "next/navigation";

interface ILinkButton {
  href: string;
  title: string;
}

const LinkButton = ({ href, title }: ILinkButton) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={pathName === href ? styles.active : styles.link}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
