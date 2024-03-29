import React from "react";
import { Menu } from "../organisms/Menu";
// import { RDVButton } from "../molecules/RDVButton";

export const MainLayout = ({title, children, className: additionalStyle}) => {
  return (
    <main className="MainLayout relative h-screen overflow-auto bg-midnight z-0">
      <Menu />
      {/* <RDVButton /> TODO: A réactiver quand je suis prête ! */}
        {children}
    </main>
  )
};