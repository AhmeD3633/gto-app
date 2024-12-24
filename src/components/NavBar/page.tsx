import React from "react";
import style from "./nav.module.css";
import wallet from "../../../public/assets/Images/wallet-logo.svg";
import login from "../../../public/assets/Images/login-icon.svg";
import join from "../../../public/assets/Images/join-now-icon.svg";
import Image from "next/image";
import emerald from "../../../public/assets/Images/emerlad.svg";
import etisalat from "../../../public/assets/Images/etisalat-logo.png";
import gto from "../../../public/assets/Images/gto-logo.png";
import Dropdown from "./Dropdown";

const page = () => {
  return (
    <nav className={style.nav}>
      {/* first section */}
      <div className={style.first}>
        <ul className={style.accountOperations}>
          <li>
            <Dropdown />
          </li>
          <li>
            <Image src={wallet} alt="wallet" />
            My Wallet
          </li>
          <li>
            <Image src={login} alt="login" />
            Login
          </li>
          <li>
            <Image src={join} alt="join" /> Join Now
          </li>
        </ul>
      </div>

      {/* second section */}
      <div className={style.second}>
        {/* left side */}
        <div className={style.leftSide}>
          {/* LOGO_IMAGE */}
          <div>
            <Image src={gto} alt="gto" />
          </div>

          {/* NAVIGATION_LINKS */}
          <div>
            <ul>
              <li>
                <a href="#">Discounted Products</a>
              </li>
              <li>
                <a href="#">Luxury Products</a>
              </li>
              <li>
                <a href="#">Membership Types</a>
              </li>
              <li>
                <a href="#">How to Book</a>
              </li>
              <li>
                <a href="#">How to Join</a>
              </li>
            </ul>
          </div>
        </div>

        {/* right side */}
        <div className={style.rightSide}>
          <Image src={emerald} alt="emerald" />
          <Image src={etisalat} alt="etisalat" />
        </div>
      </div>
    </nav>
  );
};

export default page;
