import React, { FC } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const NavLink: FC<Props> = ({ href, text }) => {
  return (
    <Link href={`#${href}`}>
      <a className="text-primary px-5 text-lg">{text}</a>
    </Link>
  );
};

export default NavLink;
