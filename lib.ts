import Cookies from "js-cookie";

const API_BASE_URL = "https://backend-gto.bit68.com/en/api/users/";

// REQUEST_OTP_FUNCTION
export const requestOtp = async (email: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}customer_otp/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ phone_or_email: email }),
    });
    return await response.json();
  } catch (error) {
    console.log("OTP request faild", error);
    throw new Error("Network error, please try again.");
  }
};

// LOGIN_WITH_OTP_FUNCTION

export const loginWithOtp = async (email: string, otp: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}customer_login/`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ phone_or_email: email, otp: otp }),
    });
    const data = await response.json();

    if (data.access_token) {
      Cookies.set("session", data.access_token, { expires: 7 });
    }
    return data;
  } catch (error) {
    console.log("OTP login failed", error);
    throw new Error("Network error, please try again.");
  }
};
