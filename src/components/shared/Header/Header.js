"use client";

import styles from "./Header.module.sass";
import Burger from "app/components/shared/svg/Burger.svg";
import EmptyCart from "app/components/shared/svg/EmptyCart.svg";
import Logo from "app/components/shared/svg/Logo.svg";
import { MobileMenu } from "app/components/shared/MobileMenu";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.burgerBox} onClick={toggleMenu}>
        <Burger />
      </div>
      <EmptyCart />
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};
