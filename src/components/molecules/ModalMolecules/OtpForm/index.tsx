import React from "react";
import style from "./style.module.css";
import { OtpInputFieldContainer } from "../OtpInputFieldContainer";
import { SubmitionButton } from "@/components/atoms/ModalAtoms/SubmitionButton";

interface OtpFormProps {
  setOtp: (otp: string) => void;
  otp: string;
  otpInputsRef: React.RefObject<(HTMLInputElement | null)[]>;
  handleOtpSubmit?: (e: React.FormEvent) => void;
}

export const OtpForm = ({
  setOtp,
  otp,
  otpInputsRef,
  handleOtpSubmit,
}: OtpFormProps) => {
  return (
    <form className={style.otpForm} onSubmit={handleOtpSubmit}>
      <OtpInputFieldContainer
        setOtp={setOtp}
        otp={otp}
        otpInputsRef={otpInputsRef}
      />
      <SubmitionButton title="Submit" />
    </form>
  );
};
