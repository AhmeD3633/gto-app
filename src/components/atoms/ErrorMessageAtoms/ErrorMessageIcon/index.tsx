import React from "react";
import style from "./style.module.css";

export const ErrorMessageIcon = () => {
  return (
    <span className={style.icon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="red"
          stroke-width="2"
          fill="none"
        />
        <line x1="12" y1="7" x2="12" y2="14" stroke="red" stroke-width="2" />
        <circle cx="12" cy="17" r="1.5" fill="red" />
      </svg>
    </span>
  );
};
