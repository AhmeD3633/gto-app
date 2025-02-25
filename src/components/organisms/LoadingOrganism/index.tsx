import React from "react";
import { LoadingMolecule } from "@/components/molecules/LoadingMolecule";
import style from "./style.module.css";

export const LoadingComponent = () => {
  return (
    <div className={style.container}>
      <LoadingMolecule />
    </div>
  );
};
