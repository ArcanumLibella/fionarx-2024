import React from "react";
import { CardService } from "../../molecules/CardService/CardService";

{/* TODO: À dynamiser ! */}
const cardServiceItems = [
  {
    title: "Branding",
    description:
      "Élaboration de votre branding, en créant une charte graphique complète qui reflète l'identité unique de votre marque.",
  },
  {
    title: "Webdesign",
    description:
      "Réalisation de wireframes et maquettes à votre image à partir de votre charte graphique.",
  },
  {
    title: "Site vitrine",
    description: "Création sur-mesure de votre site vitrine afin de présenter votre activité, vos créations, vos produits, vos compétences...",
  },
  {
    title: "E-commerce",
    description: "Création sur-mesure de votre boutique en ligne.",
  },
  {
    title: "SEO",
    description: "Amélioration de la visibilité de votre site internet en révisant son contenu et en applicant les meilleures pratiques de référencement naturel.",
  },
  {
    title: "Social Media",
    description: "Accompagnement dans le lancement de votre activité sur les réseaux sociaux.",
  },
];

export const CardsService = () => {
  return (
    <div className="flex md:flex-wrap gap-8 px-4 mb-12 -mx-4 md:px-8 md:-mx-8 xl:px-0 xl:mx-0 xl:gap-10">
      {cardServiceItems.map((card) => {
        return (
          <CardService
            key={card.title}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
};
