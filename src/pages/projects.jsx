import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ProjectsLayout } from "../components/layouts";
import { ProjectCard } from "../components/organisms/ProjectCard";

// TODO: A externaliser !
const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    posts {
      edges {
        node {
          id
          title
          uri
          tags {
            nodes {
              name
              uri
              databaseId
            }
          }
          featuredImage {
            node {
              databaseId
              altText
              sourceUrl(size: LARGE)
              # gatsbyImage(width: 1200, height: 1200)
            }
          }
        }
      }
    }
    tags {
      nodes {
        databaseId
        name
        uri
      }
    }
  }
`;

const ProjectsPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);
  
  if (!data) return;
  const tags = data.tags.nodes;

  // if (loading) return <span>Loading...</span>; //TODO: Replace with skeleton

  return (
    <ProjectsLayout tags={tags}>
        {data && data.posts.edges.map((post) => (
        <ProjectCard
            key={post.node.id}
            title={post.node.title}
            tags={post.node.tags}
            uri={post.node.uri}
            image={post.node.featuredImage}
          />
        ))}
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
