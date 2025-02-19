import React from "react";
import style from "./style.module.css";

interface BurgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const BurgerIcon = ({ isOpen, toggleMenu }: BurgerIconProps) => {
  return (
    <button
      className={`${style.burger} ${isOpen ? style.open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerIcon;
