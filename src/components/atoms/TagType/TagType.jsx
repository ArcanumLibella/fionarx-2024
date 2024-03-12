import React from "react";
import { Link } from "gatsby";

export const TagType = ({ label, slug }) => {
  return (
    <Link to={`/tags/${slug}`} className="TagType flex items-center justify-center px-3 py-1 rounded-md uppercase font-brother font-bold cursor-pointer bg-purple-ultraLight hover:bg-purple-light text-purple-ultraDark hover:text-white text-xs 2xl:text-xxs group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
