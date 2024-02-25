import React from "react";
import { Separator } from "../components/atoms/Separator";
import { Button } from "../components/molecules/Button";
import { Quote } from "../components/atoms/Quote";

export const blockRendererComponent = (block) => {
  const { content } = block.attributes;
  
  switch (block.name) {
    case "core/quote": {
      return (
        <Quote key={block.id} content={block} />
      )
    }
    case "core/separator": {
      return (
        <Separator key={block.id} />
      )
    }
    case "core/button": {
      return (
        <Button key={block.id} label={content} /* path={}  */className="" />
      )
    }
    default: {
      return;
    }
  }
}