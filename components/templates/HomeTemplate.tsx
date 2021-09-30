import React from "react";

import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import AdvantagesSection from "@/components/organisms/AdvantagesSection";

const HomeTemplate = () => {
  return (
    <div className="mx-auto">
      <Header />
      <HeroSection />
      <AdvantagesSection />
    </div>
  );
};

export default HomeTemplate;
