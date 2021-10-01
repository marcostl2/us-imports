import React from "react";
import Image from "next/image";

import Button from "@/components/atoms/Button";

import CartMan from "@/assets/images/illustrations/cart_man.svg";

function HeroSection() {
  return (
    <main className="flex py-16 content_wrapper">
      <div className="px-5">
        <h1 className="text-5xl text-grey">
          Compre nos Estados Unidos e receba na porta de sua casa
        </h1>
        <p className="text-lightGrey pt-6 pb-8 text-2xl">
          Chega de pagar caro comprando no Brasil, com a UScompras você
          economiza até 70% importando suas mercadorias
        </p>
        <Button text="Começar agora" size="large" />
      </div>
      <div className="hidden md:flex">
        <Image src={CartMan} alt="Homem com Carrinho de compras" width={1200} />
      </div>
    </main>
  );
}

export default HeroSection;
