import React from "react";
import style from "./style.module.css";

interface SingleInputFieldProps {
  label?: string;
  email?: string;
  setEmail: (value: string) => void;
}

export const SingleInputField = ({
  label,
  email,
  setEmail,
}: SingleInputFieldProps) => {
  return (
    <input
      type="text"
      placeholder={label}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={style.inputField}
    />
  );
};
