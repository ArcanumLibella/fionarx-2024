import React from "react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { Text } from "../../atoms/Text";

export const ExternalLinkButton = ({
  side = "right",
  label,
  link,
  className: additionalStyle,
}) => {
  // const handleSideArrow = () => {
  //   if (side === "left") {
  //     return (
  //       <ArrowLeftIcon className="mr-1 transition-all group-hover:-translate-x-1" />
  //     );
  //   }
  //   return (
  //     <ArrowRightIcon className="ml-1 transition-all group-hover:translate-x-1" />
  //   );
  // };

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
      {/* {handleSideArrow()} */}
    </a>
  );
};
