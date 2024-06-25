import { Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import "app/sass/globals.sass";
import localFont from "next/font/local";

const LibreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: "400",
});

const GoodSans = localFont({
  src: "../../public/fonts/good-sans-regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Atelier",
  description: "Panadería Artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${LibreCaslon.className} ${GoodSans.className}`}>
        {children}
      </body>
    </html>
  );
}
