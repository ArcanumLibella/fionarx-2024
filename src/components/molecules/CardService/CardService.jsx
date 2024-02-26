import React from "react";
import { Text } from "../../atoms/Text";

export const CardService = ({ title, description }) => {
  return (
    <div className="flex-1 h-full text-center min-w-240 scroll-mr-8 bg-purple">
      <div className="p-6">
        <Text
          type="paragraphXL"
          className="text-tomato"
        >
          {title}
        </Text>
      </div>
      <div className="p-6 bg-tomato">
        <Text type="paragraph">{description}</Text>
      </div>
    </div>
  );
};
