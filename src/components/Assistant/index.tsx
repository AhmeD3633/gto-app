import React from "react";
import style from "./style.module.css";
import assistant from "../../../public/assets/Images/personal-travel-img-one.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {/* TEXT_HERE */}
        <div className={style.left}>
          <h3>PERSONAL TRAVEL ASSISTANT TEAM</h3>
          <p>
            Our dedicated Personal Travel Assistant Team is on hand 7 days a
            week to help our members with their enquiries and bookings. All
            members need to do is to send us a detailed screenshot or link of
            the lowest price they can find online and we will take care of the
            rest.
          </p>

          <div>
            <p>
              {" "}
              For more information, please contact your Personal Travel
              Assistant Team via
              <br /> Email on info@GTOmembers.com
              <br /> Phone/SMS/WhatsApp on +44 (0) 7393912090
            </p>
          </div>
        </div>
        <div className={style.right}>
          <Image src={assistant} alt="assistant" layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default page;
