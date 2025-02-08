import React from "react";
import style from "../style.module.css";

interface OtpModalProps {
  handleModalClose: () => void;
}
const otpModal = ({ handleModalClose }: OtpModalProps) => {
  return (
    <div className={style.modalContentOtp}>
      <div className={style.buttonContainer}>
        <button className={style.close} onClick={handleModalClose}>
          &times;
        </button>
      </div>
      <h2>OTP</h2>
      <p>Kindly enter the OTP sent to email</p>
      <form className={style.otpForm}>
        <div className={style.otpInputsContainer}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <button className={style.Button}>Submit</button>
      </form>
    </div>
  );
};

export default otpModal;
