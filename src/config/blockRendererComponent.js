import React from "react";
import { Separator } from "../components/atoms/Separator";
import { Button } from "../components/molecules/Button";
import { Quote } from "../components/atoms/Quote";
import { ButtonLarge } from "../components/molecules/ButtonLarge";
import { ListItem } from "../components/molecules/ListItem";

export const blockRendererComponent = (block) => {  
  switch (block.name) {
    case "core/separator": {
      return (
        <Separator key={block.id} />
      )
    }
    case "frx/buttonlarge": {
      return (
        <ButtonLarge
          key={block.id}
          label={block.attributes.data.label}
          path={block.attributes.data.path}
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
    default: {
      return;
    }
  }
}