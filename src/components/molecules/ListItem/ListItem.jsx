import React from "react";
import { Text } from "../../atoms/Text";

export const ListItem = ({ index, content }) => {
  return (
    <li className="flex items-center mb-8">
      <span className="flex justify-center items-center mr-6 p-4 max-h-10 bg-tomato">
        <Text type="custom" className="font-brother font-extrabold text-xbase">
          {index}
        </Text>
      </span>
      <Text type="paragraphLarge">
        {content}
      </Text>
    </li>
  )
}