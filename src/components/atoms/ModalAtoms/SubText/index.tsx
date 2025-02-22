import React from "react";
import style from "./style.module.css";

interface SubTextProps {
  text: string;
}
export const SubText = ({ text }: SubTextProps) => {
  return <p className={style.subText}>{text}</p>;
};
