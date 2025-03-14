import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import gto from "../../../../public/assets/Images/gto-logo.png";

const GtoLogo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={gto}
          alt="gto"
          layout="responsive"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={style.logo}
        />
      </Link>
    </div>
  );
};

export default GtoLogo;
