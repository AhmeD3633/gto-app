import React from "react";
import style from "./style.module.css";

interface ModalTitleProps {
  title: string;
}

export const ModalTitle = ({ title }: ModalTitleProps) => {
  return <h2 className={style.loginModalTitle}>{title}</h2>;
};
