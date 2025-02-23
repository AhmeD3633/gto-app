import React, { useState } from "react";
import style from "./style.module.css";
import UserOperationBar from "@/components/organisms/user-operation-bar";
import HeaderNavigationOrganism from "@/components/organisms/Header Navigation Organism";
import { Modal } from "../Modal";

export const NavBarTemplate = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prevState) => !prevState);
  };
  return (
    <div>
      {isLoginModalOpen && <Modal toggleLoginModal={toggleLoginModal} />}
      <UserOperationBar setIsLoginModalOpen={setIsLoginModalOpen} />
      <HeaderNavigationOrganism />
    </div>
  );
};
