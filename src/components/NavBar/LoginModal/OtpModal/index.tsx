import React, { useRef, useState } from "react";
import style from "../style.module.css";
import { useRouter } from "next/navigation";
import NavBarState from "../index";

interface OtpModalProps {
  handleModalClose: () => void;
  email: string;
  setError: (value: string) => void;
  setErrorMessage: (value: boolean) => void;
  handleLoginModal: () => void;
  NavBarState: typeof NavBarState;
  setNavContent: (value: typeof NavBarState) => void;
}

const OtpModal = ({
  handleModalClose,
  email,
  setError,
  setErrorMessage,
  handleLoginModal,
  NavBarState,
  setNavContent,
}: OtpModalProps) => {
  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-gto.bit68.com/en/api/users/customer_login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_or_email: email, otp: otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to login");
        setErrorMessage(true);
      } else {
        console.log("Success:", data);
        router.push("/profile");
        handleLoginModal();
        // setNavContent(NavBarState.logout);
      }
    } catch (error) {
      setError("Network error, please try again.");
      setErrorMessage(true);
    }

    setError("");
  };
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
    <div className={style.modalContentOtp}>
      <div className={style.buttonContainer}>
        <button className={style.close} onClick={handleModalClose}>
          &times;
        </button>
      </div>
      <h2>OTP</h2>
      <p>Kindly enter the OTP sent to email</p>
      <form className={style.otpForm} onSubmit={handleSubmit}>
        <div className={style.otpInputsContainer}>
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
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
          ))}
        </div>
        <button className={style.Button}>Submit</button>
      </form>
    </div>
  );
};

export default OtpModal;
