import React from "react";
import style from "./style.module.css";
import { OtpInputField } from "@/components/atoms/ModalAtoms/OtpInputField";
export const OtpInputFieldContainer = () => {
  return (
    <div className={style.otpInputsContainer}>
      {[...Array(4)].map((_, index) => (
        <OtpInputField key={index} />
      ))}
    </div>
  );
};
