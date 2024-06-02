import "./HomeAbout.css";
import { Footer } from "app/components/shared/Footer";
import { Picture } from "./Picture";
import { TextBox } from "./TextBox";

export const HomeAbout = () => {
  return (
    <>
      <section className="home-about">
        <Picture id="about-1" path="/images/home/about_1.webp" />
        <Picture id="about-2" path="/images/home/about_2.webp" />
        <Picture id="about-3" path="/images/home/about_3.webp" />
        <TextBox id="first-text-box" />
        <Picture id="about-4" path="/images/home/about_4.webp" />
        <Picture id="about-5" path="/images/home/about_5.webp" />
        <TextBox id="second-text-box" />
        <Picture id="about-6" path="/images/home/about_6.webp" />
        <Picture id="about-7" path="/images/home/about_7.webp" />
      </section>
      <Footer />
    </>
  );
};
