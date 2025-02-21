import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  href: string;
  mobileView?: boolean;
}

const SingleNavLink = ({ title, href, mobileView }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`${mobileView ? style.mobileView : style.singleNavLink} ${
          mobileView && isActive ? style.activeLink : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default SingleNavLink;
