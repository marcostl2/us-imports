import React from "react";
import Image from "next/image";

import LogoImg from "@/assets/images/logo.svg";

const Logo = () => {
  return <Image src={LogoImg} alt="Us Imports Logo" />;
};

export default Logo;
