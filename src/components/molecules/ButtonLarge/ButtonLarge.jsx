import React from 'react';
import { Text } from "../../atoms/Text";
import { Link } from "gatsby";

export const ButtonLarge = ({
  label,
  path,
  align,
  style: additionalStyle,
}) => {
  return (
    <Link
      to={path}
      className={`
        flex justify-${align} px-8 py-5 max-w-fit border-2 border-tomato rounded-md group transition-all ease-in-out hover:duration-300 hover:bg-tomato
        ${additionalStyle}
      `}
    >
      <Text 
        type="custom"
        className="font-brother font-black text-base text-tomato group-hover:text-white group-hover:duration-300 uppercase"
      >
        {label}
      </Text>
    </Link>
  );
};
