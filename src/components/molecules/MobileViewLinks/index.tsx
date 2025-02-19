import React from "react";
import style from "./style.module.css";
import SingleNavLink from "@/components/atoms/Single-nav-link";

interface Props {
  links: { title: string; href: string }[];
  isOpen: boolean;
}
const MobileViewLinks = ({ links = [], isOpen }: Props) => {
  return (
    <div className={`${style.container} ${isOpen ? style.open : ""}`}>
      <ul>
        {links.map((link, i) => (
          <SingleNavLink key={i} title={link.title} href={link.href} />
        ))}
      </ul>
    </div>
  );
};

export default MobileViewLinks;
