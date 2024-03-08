import React from "react";
import { Menu } from "../organisms/Menu";

export const MainLayout = ({title, children, className: additionalStyle}) => {
  return (
    <main className="relative h-screen overflow-auto bg-midnight -z-100">
      <Menu />
        {children}
    </main>
  )
};