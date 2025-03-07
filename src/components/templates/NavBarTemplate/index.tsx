import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import UserOperationBar from "@/components/organisms/user-operation-bar";
import HeaderNavigationOrganism from "@/components/organisms/Header Navigation Organism";
import { Modal } from "../Modal";
import { UserOperationBarLoggedIn } from "@/components/organisms/user-operation-bar-loggedIn";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

enum UserOperationBarState {
  Login = "Login",
  Logout = "Logout",
}
export const NavBarTemplate = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userOperationBarState, setUserOperationBarState] =
    useState<UserOperationBarState>(UserOperationBarState.Login);

  useEffect(() => {
    const token = Cookies.get("session");
    if (token) {
      setUserOperationBarState(UserOperationBarState.Logout);
    } else {
      setUserOperationBarState(UserOperationBarState.Login);
    }
  }, []);

  const handleMyWalletClick = () => {
    redirect("/profile/wallet");
  };

  const handleProfileClick = () => {
    redirect("/profile");
  };

  const handleLogoutClick = () => {
    Cookies.remove("session");
    setUserOperationBarState(UserOperationBarState.Login);
    redirect("/");
  };
  const toggleLoginModal = () => {
    setIsLoginModalOpen((prevState) => !prevState);
  };
  return (
    <div>
      {isLoginModalOpen && (
        <Modal
          toggleLoginModal={toggleLoginModal}
          setUserOperationBarState={setUserOperationBarState}
        />
      )}
      {userOperationBarState === UserOperationBarState.Login && (
        <UserOperationBar setIsLoginModalOpen={setIsLoginModalOpen} />
      )}

      {userOperationBarState === UserOperationBarState.Logout && (
        <UserOperationBarLoggedIn
          handleMyWalletClick={handleMyWalletClick}
          handleProfileClick={handleProfileClick}
          handleLogoutClick={handleLogoutClick}
        />
      )}
      <HeaderNavigationOrganism />
    </div>
  );
};
