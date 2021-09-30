import React from "react";
import Link from "next/link";

import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";

const Header = () => {
  return (
    <div className="flex justify-between py-10 content_wrapper">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
