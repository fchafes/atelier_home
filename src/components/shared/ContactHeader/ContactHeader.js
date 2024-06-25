"use client";

import styles from "./ContactHeader.module.sass";
import Burger from "app/components/shared/svg/Burger.svg";
import EmptyCart from "app/components/shared/svg/EmptyCart.svg";
import Logo from "app/components/shared/svg/Logo.svg";
import { MobileMenu } from "app/components/shared/MobileMenu";
import { useState } from "react";
import Link from "next/link";

export const ContactHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.Header}>
      <nav className={styles.desktopNav}>
        <ul>
          <li>
            <Link href="/" style={{ color: "#a33434" }}>
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href="https://tienda.atelier.com.uy/"
              style={{ color: "#a33434" }}
            >
              TIENDA
            </Link>
          </li>
          <li>
            <Link
              href="https://tienda.atelier.com.uy/cart"
              style={{ color: "#a33434" }}
            >
              CARRITO
            </Link>
          </li>
          <li>
            <Link href="/contacto" style={{ color: "#a33434" }}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.burgerBox} onClick={toggleMenu}>
        <Burger style={{ color: "#a33434" }} />
      </div>
      <EmptyCart className={styles.EmptyCart} style={{ color: "#a33434" }} />
      <Link href="/" className={styles.logoLink}>
        <Logo style={{ color: "#a33434" }} />
      </Link>
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};
