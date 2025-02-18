import React from "react";
import style from "./style.module.css";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  action?: () => void;
}

const SingleOperation = ({ icon, title, action }: Props) => {
  return (
    <div>
      <li className={style.singleOperation} onClick={action}>
        <Image src={icon} alt={title} width={20} height={20} />
        {title}
      </li>
    </div>
  );
};

export default SingleOperation;
