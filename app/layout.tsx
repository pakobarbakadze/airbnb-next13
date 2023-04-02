import Modal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone built with Next.js 13",
};

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal/>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
