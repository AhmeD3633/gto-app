import React from "react";
import style from "./style.module.css";

interface SubmitionButtonProps {
  title: string;
}
export const SubmitionButton = ({ title }: SubmitionButtonProps) => {
  return <button className={style.submitionButton}>{title}</button>;
};
