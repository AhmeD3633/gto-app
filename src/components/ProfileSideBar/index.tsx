"use client";
import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProfileSideBar = () => {
  const Links = [
    {
      title: "Profile",
      link: "/profile",
      icon: "/assets/Images/profile-round-1342.svg",
    },
    {
      title: "Quotations",
      link: "/profile/quotations",
      icon: "/assets/Images/note-text-svgrepo-com.svg",
    },
    {
      title: "Confirmation",
      link: "/profile/confirmation",
      icon: "/assets/Images/check-correct-svgrepo-com.svg",
    },
    {
      title: "My Wallet",
      link: "/profile/wallet",
      icon: "/assets/Images/wallet-svgrepo-com.svg",
    },
    {
      title: "Chat",
      link: "/profile/chat",
      icon: "/assets/Images/chat-line-svgrepo-com.svg",
    },
  ];

  const pathname = usePathname();

  return (
    <div className={style.profileSideBar}>
      <ul className={style.profileSideBarList}>
        {Links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className={pathname === link.link ? style.active : ""}
            >
              <Image src={link.icon} alt={link.title} width={24} height={24} />
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSideBar;
