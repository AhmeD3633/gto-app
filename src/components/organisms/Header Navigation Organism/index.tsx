import React, { useState } from "react";
import style from "./style.module.css";
import GtoLogo from "@/components/atoms/GTO-logo";
import NavBarLinks from "@/components/molecules/NavBarLinks";
import EmeraldLogo from "@/components/atoms/Emerald-logo";
import BurgerIcon from "@/components/atoms/BurgerIcon";
import MobileViewLinks from "@/components/molecules/MobileViewLinks";

const HeaderNavigationOrganism = () => {
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

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      {isOpen && (
        <div
          className={`${style.overlay} ${isOpen ? style.show : ""}`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className={style.leftSide}>
        <GtoLogo />
        <NavBarLinks links={links} />

        <BurgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <EmeraldLogo />
      <MobileViewLinks links={links} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeaderNavigationOrganism;
