import { Link } from "gatsby";
import React from "react";

export const Tag = ({ label, slug }) => {
  return (
    <Link to={`/tags/${slug}`} className="Tag flex items-center justify-center px-3 py-1 rounded-md uppercase border border-white hover:border-tomato font-brother font-bold bg-clip-text cursor-pointer text-white hover:text-tomato text-xs 2xl:text-xxs group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
