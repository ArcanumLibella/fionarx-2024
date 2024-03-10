import React from "react";
import { Link } from "gatsby";

export const MenuItem = ({ label, path, toggleMenuItem }) => {
  return (
    <Link
      to={path}
      onClick={toggleMenuItem}
      className="font-black uppercase cursor-pointer text-[5vh] md:text-[10vw] lg:text-[7vh] xl:text-[10vh] font-brother text-stroke-white text-stroke-2 text-fill-transparent"
    >
      {label}
    </Link>
  );
};
