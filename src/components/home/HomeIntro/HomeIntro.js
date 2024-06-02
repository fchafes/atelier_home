import "./HomeIntro.css";
import Link from "next/link";

export const HomeIntro = () => {
  return (
    <section className="home-intro">
      <Link href="/tienda">
        <h2>IR A LA TIENDA</h2>
      </Link>
      <h1>
        PANADERÍA
        <br /> ARTESANAL
      </h1>
      <p>↓<br />↓</p>
    </section>
  );
};
