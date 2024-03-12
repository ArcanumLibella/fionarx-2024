import React from "react";
import { Link } from "gatsby";

export const TagRole = ({ label, slug }) => {
  return (
    <Link to={`/categories/${slug}`} className="TagRole flex items-center justify-center px-3 py-1 uppercase border border-white hover:border-tomato font-brother font-bold bg-clip-text cursor-pointer text-white hover:text-tomato text-xs 2xl:text-xxs group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
