import React from "react";
import { SpinnerAtom } from "@/components/atoms/SpinnerAtom";
import style from "./style.module.css";

export const LoadingMolecule = () => {
  return (
    <div className={style.loadingContainer}>
      <SpinnerAtom />
    </div>
  );
};
