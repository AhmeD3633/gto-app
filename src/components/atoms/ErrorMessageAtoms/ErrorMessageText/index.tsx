import React from "react";
import style from "./style.module.css";

interface ErrorMessageTextProps {
  text: string;
}

export const ErrorMessageText = ({ text }: ErrorMessageTextProps) => {
  return <div className={style.errorMessageText}>{text}</div>;
};
