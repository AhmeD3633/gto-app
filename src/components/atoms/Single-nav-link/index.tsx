import React from "react";
import style from "./style.module.css";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

const SingleNavLink = ({ title, href }: Props) => {
  return (
    <li>
      <Link href={href} className={style.singleNavLink}>
        {title}
      </Link>
    </li>
  );
};

export default SingleNavLink;
