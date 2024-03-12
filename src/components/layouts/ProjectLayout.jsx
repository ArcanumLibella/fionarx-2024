import React from "react";
import { Blobs } from "../organisms/Blobs";
import { Text } from "../atoms/Text";
import { MainLayout } from "./MainLayout";
import { LinkButton } from "../molecules/LinkButton";
import { ExternalLinkButton } from "../molecules/ExternalLinkButton";
import { GatsbyImage } from "gatsby-plugin-image";
import { TagTechno } from "../atoms/TagTechno";

export const ProjectLayout = ({title, projectDetails, children}) => {
  const { year, links, gallery, technos } = projectDetails

  return (
    <MainLayout>
      <div className="Project flex flex-col justify-between overflow-hidden xl:flex-row md:ml-20 xl:h-screen">
        <div className="overflow-auto h-[60vh] xl:max-h-screen xl:h-screen">
          {/* TODO:
            -REVOIR LE STYLE (mobile + desktop)
            -Remplacer par un slider !
          */}
          {gallery && gallery.map((image, index) => {
            return (
              <figure key={index} className="Project__gallery">
                <GatsbyImage
                  image={image.gatsbyImage}
                  alt={image.altText}
                  width={image.width}
                  height={image.height}
                />
              </figure>
            )
          })}
        </div>
        <div className="relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[580px] xl:max-w-[35%]">
          <LinkButton
            label="Retour"
            side="left"
            path="/projects"
            className="absolute top-10"
          />
          <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh]" />
          <div className="pt-16 md:pt-12 xl:pt-0">
            {/* TITLE */}
            <Text type="h3" className="Project__title mb-4 normal-case">
              {title}
            </Text>

            {/* TECHNOS */}
            <div className="Project__technos justify-between mb-10 md:flex">
              <div className="flex flex-wrap items-start w-full gap-2 mb-8 md:mb-0 md:gap-4">
                {technos && technos.map((techno) => {
                  return <TagTechno key={techno.slug} label={techno.label} />
                })}
              </div>
            </div>

            {/* DESCRIPTION */}
            <Text type="paragraph" className="Project__description mb-10">
                {children}
            </Text>

            <div className="flex justify-between">
              {/* LINKS */}
              <div className="Project__links flex flex-col">
                <Text
                  type="h6"
                  className="mb-2"
                >
                  Découvrir
                </Text>
                <div>
                  {links && links.map((link, index) => {
                    return (
                      <ExternalLinkButton
                        key={index}
                        label={link.label}
                        side="right"
                        link={link.link}
                      />
                    )
                  })}
                </div>
              </div>
              {/* YEAR */}
              <div className="Project__year flex flex-col">
                <Text
                  type="h6"
                  className="mb-2"
                >
                  Année
                </Text>
                <div>
                  <Text type="custom" className="text-sm">
                    {year}
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