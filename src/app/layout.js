import { Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import "app/sass/globals.sass";
import localFont from "next/font/local";

// const LibreCaslon = Libre_Caslon_Text({
//   subsets: ["latin"],
//   weight: "400",
// });

// const GoodSans = localFont({
//   src: "../../public/fonts/Good-Sans-Regular.ttf",
//   display: "swap",
// });

// const LibreCaslon = localFont({
//   src: "../../public/fonts/libre-caslon-text-italic.ttf",
//   display: "swap",
// });

export const metadata = {
  title: "Atelier",
  description: "Panadería Artesanal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${GoodSans.className} ${LibreCaslon.className}`}> */}
      <body>{children}</body>
    </html>
  );
}
