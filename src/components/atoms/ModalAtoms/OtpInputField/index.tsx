import React from "react";
import style from "./style.module.css";

export const OtpInputField = () => {
  return (
    <input
      className={style.otpInputField}
      type="text"
      maxLength={1}
      inputMode="numeric"
      pattern="[0-9]"
      //   value={otp[index] || ""}
      //   onChange={(e) => handleOTPChange(e, index)}
      //   ref={(el) => {
      //     otpInputsRef.current[index] = el;
      //   }}
    />
  );
};
