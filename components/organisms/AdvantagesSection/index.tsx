import React from "react";

import AdvantageCard from "@/components/molecules/AdvantageCard";

const AdvantagesSection = () => {
  return (
    <section style={{ backgroundColor: "#f5f5f5" }} className="py-16 px-5">
      <div className="content_wrapper">
        <h1 className="text-5xl text-grey text-center">
          Quais as vantagens ao importar produtos?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <AdvantageCard
            icon="economy"
            title="Economia"
            description="Comprando nos Estados Unidos você economiza até 70% do valor do produto comparado ao brasil"
          />
          <AdvantageCard
            icon="plane"
            title="Rapidez"
            description="Suas encomendas viajam de avião, que é um meio mais rápido e mais barato de envio"
          />
          <AdvantageCard
            icon="quality"
            title="Qualidade"
            description="Compre das melhores marcas e modelos, sem precisar gastar uma fortuna"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
