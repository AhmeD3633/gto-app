"use client";

import React, { useState } from "react";
import style from "./style.module.css";
import wallet from "../../../public/assets/Images/wallet-logo.7d8917e9.svg";
import login from "../../../public/assets/Images/login-icon.svg";
import join from "../../../public/assets/Images/join-now-icon.svg";
import UserOperationBar from "@/components/organisms/user-operation-bar";
import Image from "next/image";
import emerald from "../../../public/assets/Images/emerlad.svg";
import etisalat from "../../../public/assets/Images/etisalat-logo.png";
import gto from "../../../public/assets/Images/gto-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginModal from "./LoginModal";
import GtoLogo from "../atoms/GTO-logo";
import EmeraldLogo from "../atoms/Emerald-logo";
import NavBarLinks from "../molecules/NavBarLinks";
import HeaderNavigationOrganism from "../organisms/Header Navigation Organism";
import { Modal } from "../templates/Modal";

enum NavBarState {
  joinNow = "joinNow",
  logout = "logout",
}

const Nav = () => {
  const [navContent, setNavContent] = useState<NavBarState>(
    NavBarState.joinNow
  );
  const links = [
    { title: "Home", href: "/" },
    { title: "Discounted Products", href: "/discounted" },
    { title: "Luxury Products", href: "/luxury" },
    { title: "Membership Types", href: "/membership" },
    { title: "How to Book", href: "/booking" },
    { title: "How to Join", href: "/join" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const pathname = usePathname();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const handleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={style.nav}>
      {/* Overlay */}
      {isOpen && (
        <div
          className={`${style.overlay} ${isOpen ? style.show : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MAIN NAV */}
      {navContent === NavBarState.joinNow && (
        <UserOperationBar setIsLoginModalOpen={setIsLoginModalOpen} />
      )}

      {/* Secondary Navigation */}
      {/* <div className={style.second}>
        <div className={style.leftSide}>
          <GtoLogo />

          <NavBarLinks />
        </div>



        <EmeraldLogo />
      </div> */}
      <HeaderNavigationOrganism />

      {isLoginModalOpen && (
        // <LoginModal
        //   handleLoginModal={handleLoginModal}
        //   isLoginModalOpen={isLoginModalOpen}
        //   setIsLoginModalOpen={setIsLoginModalOpen}
        //   // setNavContent={setNavContent}
        // />
        <Modal />
      )}
    </nav>
  );
};

export default Nav;
