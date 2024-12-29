import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import gto from "../../../public/assets/Images/gto-logo.png";
import wallet from "../../../public/assets/Images/my-wallet-gold.svg";
import login from "../../../public/assets/Images/login-gold.svg";
import join from "../../../public/assets/Images/join-now-gold.svg";
import footerLogo from "../../../public/assets/Images/footerLogo.svg";
import visa from "../../../public/assets/Images/visa-mastercard.svg";
import { title } from "process";
const Footer = () => {
  const links = [
    { title: "Discounted Products", href: "/discounted" },
    { title: "Luxury Products", href: "/luxury" },
    { title: "Membership Types", href: "/membership" },
    { title: "How to Book", href: "/booking" },
    { title: "How to Join", href: "/how-to-join" },
  ];

  const subLinks = [
    { title: "My Wallet", href: "/wallet", icon: wallet },
    { title: "Login", href: "/login", icon: login },
    { title: "Join Now", href: "/join-now", icon: join },
  ];

  const info = [
    { title: "Terms & Conditions", href: "/" },
    { title: "Privacy Policy", href: "/" },
    { title: "Delivery Policy", href: "/" },
    { title: "Refund Policy", href: "/" },
    { title: "FAQs", href: "/faq" },
  ];

  return (
    <div className={style.container}>
      {/* TOP_SECTION */}
      <div className={style.topContainer}>
        <div className={style.topContent}>
          {/* GTO_LOGO */}
          <div>
            <Image src={gto} alt="gto-logo" width={200} />
          </div>

          {/* MAIN_MENU */}
          <div>
            <h4>Main Menu</h4>
            <ul>
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* TOP_MENU  */}
          <div>
            {" "}
            <h4>Top Menu</h4>
            <ul>
              {subLinks.map((link) => (
                <li key={link.title}>
                  <Image src={link.icon} alt={link.title} />
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO */}
          <div>
            <Image src={footerLogo} alt="footer-logo" />
            <div className={style.info}>
              <p>GTO Members is a brand of InHouse World Ltd.</p>
              <p>Registered in England,Company No. 9511392</p>
              <p>Headquarters (UK): 120 Regent Street opposite</p>
              <p>Burberry, London, W1B 5FE</p>
              <p>Phone: +442078460889</p>
              <p>Email: info@gtomembers.com</p>
            </div>
            {/* PAYMENT_METHODS*/}
            <Image src={visa} alt="visa" />
          </div>
        </div>
      </div>

      {/* BOTTOM_SECTION */}
      <div className={style.bottomContainer}>
        <div className={style.bottomContent}>
          <p>Copyright 2024 - InHouse World</p>
          <ul>
            {info.map((info, i) => (
              <li key={i}>
                {" "}
                <a href={info.href}>{info.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
