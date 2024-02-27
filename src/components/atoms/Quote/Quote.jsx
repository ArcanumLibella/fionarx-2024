import React from "react";
import { Text } from "../Text";

export const Quote = ({ content }) => {
  return (
    <div className="p-6 w-full max-w-full rounded bg-purple-light">
      <Text type="paragraphLarge" className="text-white">
        {content}
      </Text>
    </div>
  )
}