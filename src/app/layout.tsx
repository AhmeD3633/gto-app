"use client";
import Footer from "@/components/Footer";
import "../styles/global.css";
import { NavBarTemplate } from "@/components/templates/NavBarTemplate";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBarTemplate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
