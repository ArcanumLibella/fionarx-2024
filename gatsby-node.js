const path = require("path");
const { assignIds, assignGatsbyImage } = require("@webdeveducation/wp-block-tools");
const fs = require("fs");

/* 
  TODO: A CLEANER ET MODERNISER :
  -utiliser .forEach ou .map plutot que for ?
  -uniformiser le code
*/
exports.createPages = async ({ actions, graphql, reporter }) => {
  const pageTemplate = path.resolve("src/templates/Page.jsx");
  const pageProjects = path.resolve("src/templates/Projects.jsx");
  const pageProjectsByTags = path.resolve("src/templates/ProjectsByTags.jsx");

  const { createPage } = actions;

  // QUERIES
  const { data } = await graphql(`
    query GetAllPages {
      wp {
        themeStylesheet
      }

      allWpPage {
        nodes {
          title
          blocks
          databaseId
          uri
          isFrontPage
        }
      }
    }
  `);

  const projectsByTags = await graphql(`
    query GetAllProjectsByTags {
      allWpTag {
        edges {
          node {
            id
            name
            uri
            slug
            posts {
              nodes {
                databaseId
                featuredImage {
                  node {
                    gatsbyImage (
                      width: 1200,
                      height: 1200,
                      placeholder: BLURRED,
                      quality: 100
                    )
                    altText
                  }
                }
                tags {
                  nodes {
                    databaseId
                    name
                    uri
                    slug
                  }
                }
                title
                uri
              }
            }
          }
        }
      }
    }
  `);

  const projects = await graphql(`
    query GetAllProjects {
      allWpPost {
        edges {
          node {
            id
            title
            uri
            tags {
              nodes {
                databaseId
                name
                slug
              }
            }
            featuredImage {
              node {
                databaseId
                altText
                gatsbyImage(width: 1200, height: 1200)
              }
            }
          }
        }
      }
      allWpTag {
        edges {
          node {
            databaseId
            name
            slug
          }
        }
      }
    }
  `);

  // To get theme style from BO
  try {
    fs.writeFileSync("./public/themeStylesheet.css", data.wp.themeStylesheet);
  } catch (error) {}
  
  //PAGES
  // TODO: À refactoriser !
  const allPages = data.allWpPage.nodes;
  for (let i = 0; i < allPages.length; i++) {
    const page = allPages[i];
    let blocks = page.blocks;
    blocks = assignIds(blocks);
    blocks = await assignGatsbyImage({
      blocks,
      graphql,
      coreMediaText: true,
      coreImage: true,
      coreCover: true
    })

    createPage({
      path: page.uri,
      component: pageTemplate,
      context: {
        title: page.title,
        blocks,
        isFrontPage: page.isFrontPage
      }
    })
  }

  //PROJECTS BY TAGS
  projectsByTags.data.allWpTag.edges.forEach(({ node }) => {
    createPage({
      path: `/tags/${node.slug}`,
      component: pageProjectsByTags,
      context: {
        id: node.id,
        name: node.name,
        posts: node.posts,
        tags: node.tags
      },
    });
  });

  //PROJECTS
  createPage({
    path: `/projects`,
    component: pageProjects,
    context: {
      projects: projects.data.allWpPost.edges,
      tags: projects.data.allWpTag.edges
    },
  });

    // Query our posts from the GraphQL server
    const posts = await getPosts({ graphql, reporter })

    // If there are no posts in WordPress, don't do anything
    if (!posts.length) {
      return
    }
  
    // If there are posts, create pages for them
    await createIndividualBlogPostPages({ posts, graphql, actions })  
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, actions }) => {
  const projectTemplate = path.resolve("src/templates/Project.jsx");

  Promise.all(
    posts.map(({ id, title, blocks, projectDetails, uri, tags }) =>
      actions.createPage({
        path: uri,
        component: projectTemplate,
        context: {
          id: id,
          title,
          blocks,
          projectDetails,
          uri,
          tags
        },
      })
    )
  )
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query AllPostsQuery {
      allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
          id
          title
          blocks
          projectDetails {
            year,
            links {
              label,
              link
            }
            gallery {
              gatsbyImage (
                width: 1200,
                height: 1200,
                placeholder: BLURRED,
                quality: 100
              )
              altText
            }
          }
          uri
          tags {
            nodes {
              id
              name
              slug
              uri
            }
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.nodes
}