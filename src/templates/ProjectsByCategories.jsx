import React from "react";
import { ProjectsByCategoriesLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

const ProjectsByCategories = (props) => {
  const { name, posts } = props.pageContext

  return (
    <ProjectsByCategoriesLayout name={name}>
      {posts?.nodes.map((post) => (
          <ProjectCard
            key={post.databaseId}
            title={post.title}
            categories={post.categories}
            uri={post.uri}
            image={post.featuredImage}
          />
      ))}
    </ProjectsByCategoriesLayout>
  );
};

export default ProjectsByCategories;
