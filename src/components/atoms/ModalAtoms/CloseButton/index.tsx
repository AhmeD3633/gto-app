import React from "react";
import style from "./style.module.css";

interface CloseButtonProps {
  toggleLoginModal: () => void;
  bgColor?: string;
}
export const CloseButton = ({
  toggleLoginModal,
  bgColor,
}: CloseButtonProps) => {
  return (
    <button
      className={style.close}
      onClick={toggleLoginModal}
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      &times;
    </button>
  );
};
