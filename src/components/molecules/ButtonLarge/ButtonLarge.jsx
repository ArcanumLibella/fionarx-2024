import React from 'react';
import { Text } from "../../atoms/Text";
import { Link } from "gatsby";

export const ButtonLarge = ({
  label,
  path,
  externalLink,
  align,
  style: additionalStyle,
}) => {
  return (
    <Link
      to={path ? path : externalLink}
      className={`
        flex justify-${align} px-8 py-5 max-w-fit border-2 border-tomato rounded-md group transition-all ease-in-out hover:duration-300 hover:bg-tomato cursor-pointer
        ${additionalStyle}
      `}
      target={externalLink ?? '_blank'}
    >
      <Text 
        type="custom"
        className="font-brother font-black text-base text-center text-tomato group-hover:text-white group-hover:duration-300 uppercase"
      >
        {label}
      </Text>
    </Link>
  );
};
