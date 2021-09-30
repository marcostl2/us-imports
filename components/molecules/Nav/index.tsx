import React from "react";

import NavLink from "@/components/atoms/NavLink";
import Button from "@/components/atoms/Button";

import NavList from "@/components/molecules/Nav/NavList";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex justify-between items-center h-full">
        <NavList>
          <NavLink href="hero" text="Como funciona" />
        </NavList>
        <NavList>
          <NavLink href="services" text="Serviços" />
        </NavList>
        <NavList>
          <NavLink href="create" text="Criar conta" />
        </NavList>
        <NavList>
          <Button text="Entrar" size="medium" />
        </NavList>
      </ul>
    </nav>
  );
};

export default Nav;
