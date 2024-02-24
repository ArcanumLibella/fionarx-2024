import React from "react";
import { Text } from "../Text";

export const Quote = ({ block }) => {
  console.log("block : ", block);

  function displayQuoteContent(block) {
    console.log("BLOCK ? -> ", block)
    if (block /* && block.innerblocks.lenght > 0 */) {
      console.log("POUET ?")
      return block.innerblocks.map((innerblock) => {
        console.log("innerblock ", innerblock);
        return innerblock.attributes.content;
      })
    }
  }

  return (
    <div className="p-6 rounded bg-purple-light">
      <Text type="paragraphLarge" className="text-white">
        Je suis une citation
        {displayQuoteContent(block)}
      </Text>
    </div>
  )
}