import { Link } from "gatsby";
import React from "react";

export const Tag = ({ label, path }) => {
  return (
    <Link to={path} className="flex items-center justify-center px-3 py-1.5 rounded-md uppercase border border-white hover:border-tomato font-brother font-extrabold bg-clip-text text-white hover:text-tomato text-xs 2xl:text-xxs group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
