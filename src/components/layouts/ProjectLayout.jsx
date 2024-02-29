import React from "react";
import { Blobs } from "../organisms/Blobs";
import { Text } from "../atoms/Text";
import { MainLayout } from "./MainLayout";
import { Tag } from "../atoms/Tag";
import { LinkButton } from "../molecules/LinkButton";
import { ExternalLinkButton } from "../molecules/ExternalLinkButton";
// import { GatsbyImage } from "gatsby-plugin-image";

export const ProjectLayout = ({title, tags, projectDetails, children}) => {  
  return (
    <MainLayout>
      <div className="flex flex-col justify-between overflow-hidden xl:flex-row md:ml-20 xl:h-screen">
        {/* <GatsbyImage
          image={image}
          alt="Aperçu du projet"
          imgClassName="h-full"
        /> */}
        <div className="relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[520px] xl:max-w-[35%]">
          {/* TODO: A revoir */}
          <LinkButton
            label="Tous les projets"
            side="left"
            path="/projets"
            className="absolute top-10"
          />
          <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh] z-0" />
          <div className="pt-16 md:pt-12 xl:pt-0">
            {/* TITLE */}
            <Text type="h3" className="mb-4 normal-case">
              {title}
            </Text>

            <div className="justify-between mb-10 md:flex">
              {/* TAGS */}
              <div className="flex flex-wrap items-start w-full gap-2 mb-8 md:mb-0 md:gap-4">
                {tags.map((tag) => {
                  return <Tag key={tag.id} label={tag.name} path={tag.uri} />
                })}
              </div>
            </div>

            {/* DESCRIPTION */}
            <Text type="paragraph" className="mb-10">
                {children}
            </Text>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <Text
                  type="h6"
                  className="mb-2"
                >
                  Découvrir
                </Text>
                <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                  {/* TODO: Ajouter liens */}
                  {/* <ExternalLinkButton
                    label={label}
                    side="right"
                    path={link}
                  /> */}
                </div>
              </div>
              <div className="flex flex-col">
                <Text
                  type="h6"
                  className="mb-2"
                >
                  Année
                </Text>
                <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                  <Text type="custom" className="text-sm">
                    {projectDetails.year}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
};