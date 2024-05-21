"use client";
import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import styles from "./HamburgerMenu.module.css";
import { MenuContext } from "@/shared/context/MenuProvider";
const MobileMenu = () => {
  const context = useContext(MenuContext);
  return (
    <p onClick={() => context.setMenuOpen((prev: boolean) => !prev)}>
      {context.menuOpen ? (
        <CloseRoundedIcon className={styles.closeBtn} />
      ) : (
        <MenuIcon className={styles.mobileBtn} />
      )}
    </p>
  );
};

export default MobileMenu;
