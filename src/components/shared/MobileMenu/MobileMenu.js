import "./MobileMenu.css";
import Exit from "app/components/shared/svg/Exit.svg";
import Link from "next/link";

export const MobileMenu = ({ openMenu, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${openMenu ? "show-menu" : ""}`}>
      <ul>
        <li>
          <Link href="/" onClick={toggleMenu}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href="https://tienda.atelier.com.uy/" onClick={toggleMenu}>
            Tienda
          </Link>
        </li>
        <li>
          <Link href="https://tienda.atelier.com.uy/cart/" onClick={toggleMenu}>
            Carrito
          </Link>
        </li>
        <li>
          <Link href="/contacto" onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
        <li>
          <p className="happy-face">:)</p>
        </li>
      </ul>
      <Exit className="exit-svg" onClick={toggleMenu} />
    </div>
  );
};
