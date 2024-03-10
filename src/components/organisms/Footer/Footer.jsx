import React from "react";
import { Text } from "../../atoms/Text";
import { Separator } from "../../atoms/Separator";
import { ButtonLarge } from "../../molecules/ButtonLarge";

export const Footer = () => {
  return (
    <div className="Footer relative flex flex-col items-center w-full px-4 md:px-8 md:pl-20 pb-24 md:pb-48 z-10">
      <Text type="paragraphXL" className="md:max-w-screen-sm xl:max-w-screen-lg 2xl:max-w-screen-xl text-center">
        Vous avez un projet en cours ou envisagez de digitaliser votre activité ?
        N'hésitez pas à me contacter.
        Ensemble, voyons comment je peux vous aider à dynamiser votre présence digitale et à atteindre vos objectifs stratégiques avec succès.
      </Text>
      <Separator />
      <ButtonLarge label="Prendre RDV" path="/contact" />
    </div>
  )
}