import React, { FC } from "react";

interface Props {
  children: JSX.Element;
}

const NavList: FC<Props> = ({ children }) => {
  return <li className="flex items-center h-full">{children}</li>;
};

export default NavList;
