"use client";

import styles from "./Header.module.sass";
import Burger from "app/components/shared/svg/Burger.svg";
import EmptyCart from "app/components/shared/svg/EmptyCart.svg";
import Logo from "app/components/shared/svg/Logo.svg";
import { MobileMenu } from "app/components/shared/MobileMenu";
import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [linkColor, setLinkColor] = useState("#FFF"); // Color inicial de los enlaces

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollFraction = scrollTop / docHeight;
      // Cambia a color-ddl cuando el usuario alcanza el 20% del scroll
      if (scrollFraction >= 0.2) {
        setLinkColor("#a33434"); // Color fijo ddl
      } else {
        setLinkColor("#fff"); // Vuelve a blanco si está arriba del 20% del scroll
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.Header}>
      <nav className={styles.desktopNav}>
        <ul>
          <li>
            <Link href="/" style={{ color: linkColor }}>
              INICIO
            </Link>
          </li>
          <li>
            <Link
              href="https://tienda.atelier.com.uy/"
              style={{ color: linkColor }}
            >
              TIENDA
            </Link>
          </li>
          <li>
            <Link
              href="https://tienda.atelier.com.uy/cart"
              style={{ color: linkColor }}
            >
              CARRITO
            </Link>
          </li>
          <li>
            <Link href="/contacto" style={{ color: linkColor }}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.burgerBox} onClick={toggleMenu}>
        <Burger style={{ color: linkColor }} />
      </div>
      <EmptyCart className={styles.EmptyCart} style={{ color: linkColor }} />
      <Link href="/" className={styles.logoLink}>
        <Logo style={{ color: linkColor }} />
      </Link>
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};
