import "./Footer.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <h3>ATELIER</h3>
      <address>
        Chaná 2004
        <br />
        Lunes a Sábados
        <br />
        9.00 a 19.00hs
      </address>
      <span className="footer-face">:)</span>
      <ul className="footer-nav">
        <li>
          <Link href="https://tienda.atelier.com.uy/">Tienda</Link>
        </li>
        <li>/</li>
        <li>
          <a
            href="https://www.instagram.com/ateliercasadepan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="mailto:ateliercasadepan@gmail.com">Mail</a>
        </li>
      </ul>
    </footer>
  );
};
