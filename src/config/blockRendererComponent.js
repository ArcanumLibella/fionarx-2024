import React from "react";
import { Separator } from "../components/atoms/Separator";
import { Quote } from "../components/atoms/Quote";
import { ButtonLarge } from "../components/molecules/ButtonLarge";
import { ListItem } from "../components/molecules/ListItem";
import { CardService } from "../components/molecules/CardService/CardService";
import { GatsbyImage } from "gatsby-plugin-image";
import { getClasses, getStyles } from "@webdeveducation/wp-block-tools";
import { CardsService } from "../components/organisms/CardsService/CardsService";
import { ContactForm } from "../components/organisms/ContactForm";

export const blockRendererComponent = (block) => {  
  switch (block.name) {
    case "core/separator": {
      return (
        <Separator key={block.id} />
      )
    }
    case "core/image": {
      return (
        <figure key={block.id} className={getClasses(block)}>
          <GatsbyImage 
            style={getStyles(block)}
            image={block.attributes.gatsbyImage}
            alt={block.attributes.alt || ''}
            width={block.attributes.width}
            height={block.attributes.height}
          />
        </figure>
      )
    }
    case "frx/buttonlarge": {
      return (
        <ButtonLarge
          key={block.id}
          label={block.attributes.data.label}
          path={block.attributes.data.path}
          externalLink={block.attributes.data.path_external?.url}
          align={block.attributes.data.align}
          style={block.attributes.data.style}
        />
      )
    }
    case "frx/customquote": {
      return (
        <Quote 
          key={block.id}
          content={block.attributes.data.content}
        />
      )
    }
    case "frx/listitem": {
      return (
        <ListItem 
          key={block.id}
          index={block.attributes.data.index}
          content={block.attributes.data.content}
        />
      )
    }
    case "frx/cardservice": {
      return (
        <CardService 
          key={block.id}
          title={block.attributes.data.title}
          description={block.attributes.data.description}
        />
      )
    }
    case "frx/cardsservice": {
      return (
        <CardsService key={block.id} />
      )
    }
    case "forminator/forms": {
      console.log("block : ", block)
      return (
        <ContactForm
          key={block.id}
          formId={block.attributes.id}
          formMarkup={block.attributes.formMarkup}
        />
      )
    }
    case "contact-form-7/contact-form-selector": {
      return (
        <ContactForm
          key={block.id}
          formId={block.attributes.id}
          formMarkup={block.attributes.formMarkup}
        />
      )
    }
    default: {
      return;
    }
  }
}