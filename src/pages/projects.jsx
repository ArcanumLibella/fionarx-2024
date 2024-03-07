import React from "react";
import { ProjectsLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

const ProjectsPage = () => {
  return (
    <ProjectsLayout>
      {/* TODO: A dynamiser ! */}
        {/* {data.allMdx.nodes.map((node) => ( */}
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        <ProjectCard
            key={"id"}
            title={"title"}
            tags={"tags"}
            slug={"slug"}
            // imageData={preview_image}
          />
        {/* ))} */}
    </ProjectsLayout>
  );
};

export default ProjectsPage;

export const Head = () => (
  <>
    <title>Projets</title>
    <meta description="Un aperçu de tous les projets que j'ai réalisés"></meta>
  </>
);
