"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import wallet from "../../../public/assets/Images/wallet-logo.svg";
import login from "../../../public/assets/Images/login-icon.svg";
import join from "../../../public/assets/Images/join-now-icon.svg";
import Image from "next/image";
import emerald from "../../../public/assets/Images/emerlad.svg";
import etisalat from "../../../public/assets/Images/etisalat-logo.png";
import gto from "../../../public/assets/Images/gto-logo.png";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
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

  const pathname = usePathname();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
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

      {/* First Section */}
      <div className={style.first}>
        <ul className={style.accountOperations}>
          <li>
            <Dropdown />
          </li>
          <li>
            <Image src={wallet} alt="wallet" />
            My Wallet
          </li>
          <li>
            <Image src={login} alt="login" />
            Login
          </li>
          <li>
            <Image src={join} alt="join" />
            Join Now
          </li>
        </ul>
      </div>

      {/* Second Section */}
      <div className={style.second}>
        {/* Left Side */}
        <div className={style.leftSide}>
          {/* Logo */}
          <div className={style.logoContainer}>
            <Link href="/">
              <Image
                src={gto}
                alt="gto"
                layout="responsive"
                className={style.logo}
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div>
            {links.map((link, i) => (
              <ul key={i} className={style.links}>
                <li>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Burger Icon */}
        <button
          className={`${style.burger} ${isOpen ? style.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Right Side */}
        <div className={style.rightSide}>
          <Image src={emerald} alt="emerald" />
          <Image src={etisalat} alt="etisalat" />
        </div>
      </div>

      {/* Mobile View */}
      <div className={`${style.mobileview} ${isOpen ? style.open : ""}`}>
        <ul className={style.links}>
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={pathname === link.href ? style.active : ""}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Image src={emerald} alt="emerald" />
          <Image src={etisalat} alt="etisalat" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
