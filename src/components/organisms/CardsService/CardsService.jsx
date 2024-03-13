import React from "react";
import { CardService } from "../../molecules/CardService/CardService";
import { graphql, useStaticQuery } from "gatsby";
import { ArrowRightIcon } from "../../../assets/icons";
import { COLORS } from "../../../constants/Colors";

export const CardsService = () => {
  // TODO: Externaliser cette query
  const data = useStaticQuery(graphql`
    query GetCardsServices {
      wp {
        acfOptionsCardsService {
          cardsService {
            cards {
              title
              description
            }
          }
        }
      }
    }
  `);

const cardsService = data.wp.acfOptionsCardsService.cardsService.cards;
if (!cardsService) return;

  return (
    <div className="relative">
      <ArrowRightIcon 
        className="absolute lg:hidden -right-2 top-1/2 -translate-y-1/2 w-12 h-12 animate-pulse"
        fill={COLORS.white.DEFAULT}
        width={40}
        height={40}
      />
      <div className="CardsService flex lg:flex-wrap gap-8 px-4 mb-12 !-mx-4 overflow-x-auto lg:overflow-hidden max-w-800 lg:max-w-5xl xl:max-w-800 md:px-8 md:!-mx-8 xl:!mx-0 xl:px-0 xl:gap-10">
        {cardsService.map((card) => {
          return (
            <CardService
              key={card.title}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};
