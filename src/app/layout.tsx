"use client";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar/index";
import "../styles/global.css";
import { NavBarTemplate } from "@/components/templates/NavBarTemplate";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBarTemplate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
