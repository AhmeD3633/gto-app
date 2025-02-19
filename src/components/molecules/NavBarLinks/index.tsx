import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import SingleNavLink from "@/components/atoms/Single-nav-link";

interface Props {
  links: { title: string; href: string }[];
}

const NavBarLinks = ({ links }: Props) => {
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
