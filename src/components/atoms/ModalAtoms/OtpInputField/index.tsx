import React from "react";
import style from "./style.module.css";

interface OtpInputFieldProps {
  handleOTPChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  index: number;
  otpInputsRef: React.RefObject<(HTMLInputElement | null)[]>;
  otp: string;
}

export const OtpInputField = ({
  handleOTPChange,
  index,
  otpInputsRef,
  otp,
}: OtpInputFieldProps) => {
  return (
    <input
      className={style.otpInputField}
      type="text"
      maxLength={1}
      inputMode="numeric"
      pattern="[0-9]"
      value={otp[index] || ""}
      onChange={(e) => handleOTPChange(e, index)}
      ref={(el) => {
        otpInputsRef.current[index] = el;
      }}
    />
  );
};
