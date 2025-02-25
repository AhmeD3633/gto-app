import React from "react";
import style from "./style.module.css";
import { OtpInputField } from "@/components/atoms/ModalAtoms/OtpInputField";

interface OtpInputFieldContainerProps {
  setOtp: (otp: string) => void;
  otp: string;
  otpInputsRef: React.RefObject<(HTMLInputElement | null)[]>;
}
export const OtpInputFieldContainer = ({
  setOtp,
  otp,
  otpInputsRef,
}: OtpInputFieldContainerProps) => {
  const handleOTPChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    let newOtp = otp.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    if (value && index < otpInputsRef.current.length - 1) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className={style.otpInputsContainer}>
      {[...Array(4)].map((_, index) => (
        <OtpInputField
          key={index}
          handleOTPChange={handleOTPChange}
          index={index}
          otpInputsRef={otpInputsRef}
          otp={otp}
        />
      ))}
    </div>
  );
};
