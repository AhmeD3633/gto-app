import React from "react";
import style from "./style.module.css";

interface CloseButtonProps {
  toggleLoginModal: () => void;
}
export const CloseButton = ({ toggleLoginModal }: CloseButtonProps) => {
  return (
    <button className={style.close} onClick={toggleLoginModal}>
      &times;
    </button>
  );
};
