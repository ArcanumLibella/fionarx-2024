import React from "react";
import { ProjectsByTagsLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

const ProjectsByTags = (props) => {
  const { name, posts } = props.pageContext

  return (
    <ProjectsByTagsLayout name={name}>
      {posts?.nodes.map((post) => (
          <ProjectCard
            key={post.databaseId}
            title={post.title}
            tags={post.tags}
            uri={post.uri}
            image={post.featuredImage}
          />
      ))}
    </ProjectsByTagsLayout>
  );
};

export default ProjectsByTags;
