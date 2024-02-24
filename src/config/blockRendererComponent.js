import React from "react";
import { Text } from "../components/atoms/Text";
import { Separator } from "../components/atoms/Separator";
import { Button } from "../components/molecules/Button";
import { Quote } from "../components/atoms/Quote";

export const blockRendererComponent = (block) => {
  // console.log("BLOCK : ", block);
  const { content, level, fontSize } = block.attributes;
  
  switch (block.name) {
    case "core/heading": {
      switch (level) {
        case 2: {
          return (
            <Text key={block.id} type="h2">{content}</Text>
          )
        }
        case 3: {
          return (
            <Text key={block.id} type="h3" className="text-white">{content}</Text>
          )
        }
        case 4: {
          return (
            <Text key={block.id} type="h4" className="mb-8 text-white">{content}</Text>
          )
        }
        case 5: {
          return (
            <Text key={block.id} type="h5" className="text-white">{content}</Text>
          )
        }
        default: {
          return <Text key={block.id} type="h5">{content}</Text>
        }
      }
    }
    case "core/paragraph": {
      switch (fontSize) {
        case "large": {
          return (
            <Text key={block.id} type="paragraphXL" className=" text-white">{content}</Text>
          )
        }
        case "medium": {
          return (
            <Text key={block.id} type="paragraph" className="mb-4 text-white">{content}</Text>
          )
        }
        case "small": {
          return (
            <Text key={block.id} type="paragraphLight" className="mb-4 text-white">{content}</Text>
          )
        }
        default: {
          return (
            <Text key={block.id} type="paragraphLarge" className="mb-4 text-white">{content}</Text>
          )
        }
      }
    }
    case "core/quote": {
      return (
        <Quote content={block} />
      )
    }
    case "core/separator": {
      return (
        <Separator />
      )
    }
    case "core/button": {
      return (
        <Button label={content} /* path={}  */className="" />
      )
    }
    default: {
      return;
    }
  }
}