import React from "react";
import { Menu } from "../organisms/Menu";

export const MainLayout = ({title, children, className: additionalStyle}) => {
  return (
    <main className="MainLayout relative h-screen overflow-auto bg-midnight z-0">
      <Menu />
        {children}
    </main>
  )
};