import React from "react";
import style from "./style.module.css";
import { ErrorMessageText } from "@/components/atoms/ErrorMessageAtoms/ErrorMessageText";

export const ErrorMessageBody = () => {
  return (
    <div className={style.errorMessageBody}>
      <ErrorMessageText text="Not found" />
    </div>
  );
};
