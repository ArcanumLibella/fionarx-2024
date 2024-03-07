import React from "react";
import { MainLayout } from "./MainLayout";
import { BlobsLight } from "../organisms/BlobsLight/BlobsLight";
import { Blobs } from "../organisms/Blobs";
import { Text } from "../atoms/Text";
import { Tag } from "../atoms/Tag";

export const ProjectsLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center h-full min-h-screen md:pl-20">
        <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh] z-0" />
        <Blobs className="fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] z-0" />
        <div className="pt-8 px-8 md:px-12 lg:px-24 xl:px-32">
          <Text type="h6" className="mb-4 font-bold text-purple-ultraLight uppercase">
            Filtrer les projets
          </Text>
          <div className="flex flex-wrap items-start w-full gap-2 md:gap-4">
            {/* TODO: A dynamiser ! */}
            <Tag label={"tag"}/>
            <Tag label={"tag"}/>
            <Tag label={"tag"}/>
            <Tag label={"tag"}/>
            <Tag label={"tag"}/>
          </div>
        </div>
        <div className="flex items-center h-full gap-16 px-8 overflow-x-auto overflow-y-hidden xl:gap-[6vw] md:px-12 lg:px-24 xl:px-32">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};