import React from "react";
import Link from "next/link";

import Logo from "@/components/atoms/Logo";
import Nav from "@/components/molecules/Nav";
import MobileMenu from "@/components/atoms/Button/MobileMenu";

const Header = () => {
  return (
    <div className="flex justify-between py-10 content_wrapper px-5">
      <Logo />
      <Nav />
      <MobileMenu />
    </div>
  );
};

export default Header;
