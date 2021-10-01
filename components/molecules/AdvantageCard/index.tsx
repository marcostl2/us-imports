import React, { FC } from "react";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const AdvantageCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl benefit_card_shadow flex flex-col justify-center items-center p-8 text-center">
      <Image
        src={require(`@/assets/images/icons/${icon}.svg`)}
        alt="Icone da vantagem"
      />
      <h3 className="text-grey text-2xl font-medium mt-5 mb-2">{title}</h3>
      <p className="text-lightGrey text-lg">{description}</p>
    </div>
  );
};

export default AdvantageCard;
