import React from "react";
import style from "./style.module.css";
import { OtpInputFieldContainer } from "../OtpInputFieldContainer";
import { SubmitionButton } from "@/components/atoms/ModalAtoms/SubmitionButton";

export const OtpForm = () => {
  return (
    <div className={style.otpForm}>
      <OtpInputFieldContainer />
      <SubmitionButton title="Submit" />
    </div>
  );
};
