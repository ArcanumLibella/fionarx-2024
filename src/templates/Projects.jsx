import React from "react";
import { ProjectsLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

const Projects = (props) => {
  const { projects, tags } = props.pageContext

  return (
    <ProjectsLayout tags={tags}>
      {projects.map((project) => (
          <ProjectCard
            key={project.node.databaseId}
            title={project.node.title}
            tags={project.node.tags}
            uri={project.node.uri}
            image={project.node.featuredImage}
          />
      ))}
    </ProjectsLayout>
  );
};

export default Projects;
