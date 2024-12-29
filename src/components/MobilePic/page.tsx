import React from "react";
import style from "./mobile.module.css";
import gtoMobile from "../../../public/assets/Images/gto-mobile.svg";
import Image from "next/image";
import appstore from "../../../public/assets/Images/download-app-store.svg";
import googleplay from "../../../public/assets/Images/download-google-play.svg";

const page = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          {/* TEXT_HERE */}
          <div className={style.text}>
            <p>
              Please download the GTO mobile app to enjoy ONE OF THE MOST
              PRESTIGIOUS AND GENEROUS TRAVEL AND LIFESTYLE MEMBERSHIPS IN THE
              WORLD. This will help you easily keep track of your quotations,
              booking confirmations, offers, promotions and much more.
            </p>
          </div>

          {/* IMAGE_HERE */}
          <div className={style.images}>
            <Image src={gtoMobile} alt="gtoMobile" layout="responsive" />
            {/* DOWNLOAD_OPTIONS */}
            <div>
              <Image src={appstore} alt="appstore" layout="interactive" />
              <Image src={googleplay} alt="googleplay" layout="interactive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
