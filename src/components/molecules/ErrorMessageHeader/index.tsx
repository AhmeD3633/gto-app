import React from "react";
import style from "./style.module.css";
import { ErrorMessageIcon } from "@/components/atoms/ErrorMessageAtoms/ErrorMessageIcon";
import { CloseButton } from "@/components/atoms/ModalAtoms/CloseButton";
import { ErrorMessageTitle } from "@/components/atoms/ErrorMessageAtoms/ErrorMessageTitle";

export const ErrorMessageHeader = () => {
  return (
    <div className={style.errorMessageHeader}>
      <div>
        <ErrorMessageIcon />
        <ErrorMessageTitle title="Detail" />
      </div>
      <CloseButton />
    </div>
  );
};
