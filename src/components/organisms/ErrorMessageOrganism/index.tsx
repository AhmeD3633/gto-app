import React from "react";
import style from "./style.module.css";
import { ErrorMessageHeader } from "@/components/molecules/ErrorMessageHeader";
import { ErrorMessageBody } from "@/components/molecules/ErrorMessageBody";

export const ErrorMessageOrganism = () => {
  return (
    <div className={style.errorContainer}>
      <ErrorMessageHeader />
      <ErrorMessageBody />
    </div>
  );
};
