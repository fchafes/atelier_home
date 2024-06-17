import "./HomeAbout.css";
import { Footer } from "app/components/shared/Footer";
import { Picture } from "./Picture";
import { TextBox } from "./TextBox";

export const HomeAbout = () => {
  return (
    <>
      <section className="home-about">
        <Picture id="about-1" speed={-0.1} />
        <Picture id="about-2" speed={0.1} />
        <h3 className="about-title">SOBRE ATELIER</h3>
        <Picture id="about-3" speed={0} unoptimized={true} />
        <TextBox id="first-text-box" speed={-0.01} />
        <Picture id="about-4" speed={0.05} />
        <Picture id="about-5" speed={0} />
        <TextBox id="second-text-box" speed={-0.05} />
        <Picture id="about-6" speed={-0.05} />
        <Picture id="about-7" speed={0} />
      </section>
      <Footer />
    </>
  );
};
