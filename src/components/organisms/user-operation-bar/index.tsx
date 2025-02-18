import React from "react";
import style from "./style.module.css";
import Dropdown from "@/components/atoms/currency-dropDown";
import AccOperations from "@/components/molecules/acc-operations-list";

interface Props {
  setIsLoginModalOpen: (value: boolean) => void;
}
const UserOperationBar = ({ setIsLoginModalOpen }: Props) => {
  return (
    <div className={style.first}>
      <Dropdown />
      <AccOperations setIsLoginModalOpen={setIsLoginModalOpen} />
    </div>
  );
};

export default UserOperationBar;
