import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/icons";
import { Text } from "../../atoms/Text";
import { COLORS } from "../../../constants/Colors";

export const ExternalLinkButton = ({
  side = "right",
  label,
  link,
  className: additionalStyle,
}) => {
  const handleSideArrow = () => {
    if (side === "left") {
      return (
        <ArrowLeftIcon
          className="mr-1 mb-0.5 transition-all group-hover:-translate-x-1"
          fill={COLORS.tomato.DEFAULT}
        />
      );
    }
    return (
      <ArrowRightIcon 
        className="ml-1 mb-0.5 transition-all group-hover:translate-x-1"
        fill={COLORS.tomato.DEFAULT}
      />
    );
  };

  return (
    <a
      href={link}
      target="_blank"
      className={`
        flex items-center z-30 group cursor-pointer
        ${side === "left" && "flex-row-reverse"}
        ${additionalStyle}
      `}
      rel="noreferrer"
    >
      <Text type="custom" className="text-sm">
        {label}
      </Text>
      {handleSideArrow()}
    </a>
  );
};
