import { Link } from "gatsby";
import React from "react";

export const Tag = ({ label, path }) => {
  return (
    <Link to={path} className="flex items-center justify-center px-3 py-1.5 rounded-md uppercase border border-white font-brother font-extrabold bg-clip-text text-white text-xs 2xl:text-xxs">
      {label}
    </Link>
  );
};
