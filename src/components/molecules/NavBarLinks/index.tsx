import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import SingleNavLink from "@/components/atoms/Single-nav-link";

const NavBarLinks = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "Discounted Products", href: "/discounted" },
    { title: "Luxury Products", href: "/luxury" },
    { title: "Membership Types", href: "/membership" },
    { title: "How to Book", href: "/booking" },
    { title: "How to Join", href: "/join" },
  ];
  return (
    <div className={style.container}>
      {links.map((link, i) => (
        <ul key={i} className={style.links}>
          <SingleNavLink title={link.title} href={link.href} />
        </ul>
      ))}
    </div>
  );
};

export default NavBarLinks;
