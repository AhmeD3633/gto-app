import React from "react";
import style from "./style.module.css";

interface ErrorMessageTitleProps {
  title: string;
}

export const ErrorMessageTitle = ({ title }: ErrorMessageTitleProps) => {
  return <h3 className={style.errorMessageTitle}>{title}</h3>;
};
