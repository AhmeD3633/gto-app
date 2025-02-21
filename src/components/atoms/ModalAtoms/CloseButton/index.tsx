import React from "react";
import style from "./style.module.css";

interface CloseButtonProps {
  handleModalClose: () => void;
}
export const CloseButton = ({ handleModalClose }: CloseButtonProps) => {
  return (
    <button className={style.close} onClick={handleModalClose}>
      &times;
    </button>
  );
};
