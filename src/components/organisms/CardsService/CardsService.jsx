import React from "react";
import { CardService } from "../../molecules/CardService/CardService";
import { graphql, useStaticQuery } from "gatsby";

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
    // TODO: Revoir le responsive
    <div className="CardsService flex lg:flex-wrap gap-8 px-4 mb-12 !-mx-4 overflow-x-auto lg:overflow-hidden md:px-8 md:-mx-8 xl:px-0 xl:mx-0 xl:gap-10">
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
  );
};
