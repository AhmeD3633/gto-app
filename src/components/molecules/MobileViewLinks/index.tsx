import React from "react";
import style from "./style.module.css";
import SingleNavLink from "@/components/atoms/Single-nav-link";

interface Props {
  links: { title: string; href: string }[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const MobileViewLinks = ({ links = [], isOpen, setIsOpen }: Props) => {
  return (
    <div className={`${style.container} ${isOpen ? style.open : ""}`}>
      <ul>
        {links.map((link, i) => (
          <SingleNavLink
            key={i}
            title={link.title}
            href={link.href}
            mobileView={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileViewLinks;
