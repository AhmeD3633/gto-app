"use client";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar/index";
import "../styles/global.css";
import UserOperationBar from "@/components/organisms/user-operation-bar";
import HeaderNavigationOrganism from "@/components/organisms/Header Navigation Organism";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <UserOperationBar />
        <HeaderNavigationOrganism /> */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
