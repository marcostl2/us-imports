import React from "react";
import Image from "next/image";

import Menu from "@/assets/images/icons/menu.svg";

function MobileMenu() {
  return (
    <div className="flex items-center md:hidden ">
      <Image src={Menu} alt="Ícone do menu" />
    </div>
  );
}

export default MobileMenu;
