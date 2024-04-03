import React from "react";
import { Blobs } from "../organisms/Blobs";
import { Text } from "../atoms/Text";
import { MainLayout } from "./MainLayout";
import { LinkButton } from "../molecules/LinkButton";
import { ExternalLinkButton } from "../molecules/ExternalLinkButton";
import { GatsbyImage } from "gatsby-plugin-image";
import { TagTechno } from "../atoms/TagTechno";
import { ChevronsDownIcon } from "../../assets/icons";
import { COLORS } from "../../constants/Colors";

export const ProjectLayout = ({title, projectDetails, children}) => {
  const { year, links, gallery, technos } = projectDetails

  return (
    <MainLayout>
      <div className="Project flex flex-col justify-between xl:flex-row md:ml-20 xl:h-screen">
        <div className="Project__preview overflow-auto w-full h-[60vh] xl:max-h-screen xl:h-screen xl:text-center bg-purple">
          <div className="flex justify-center items-end h-full w-full">
            {gallery && gallery.map((image, index) => {
              return (
                <figure key={index} className="Project__gallery h-full">
                  <GatsbyImage
                    image={image.gatsbyImage}
                    alt={image.altText}
                    width={image.width}
                    height={image.height}
                  />
                </figure>
              )
            })}
            <ChevronsDownIcon 
              stroke={COLORS.tomato.DEFAULT}
              width={40}
              height={40}
              className="fixed bottom-[42vh] xl:bottom-4 justify-self-auto animate-down z-100"
            />
          </div>
        </div>
        <div className="Project__description relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[580px] xl:max-w-[35%]">
          <LinkButton
            label="Retour"
            side="left"
            path="/projets"
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