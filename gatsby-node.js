const path = require("path");
const { assignIds, assignGatsbyImage } = require("@webdeveducation/wp-block-tools");
const fs = require("fs");

/* 
  TODO: A CLEANER ET MODERNISER :
  -utiliser .map plutot que for ?
  -uniformiser le code
*/
exports.createPages = async ({ actions, graphql, reporter }) => {
  const pageTemplate = path.resolve("src/templates/Page.jsx");

  const { createPage } = actions;

  const { data } = await graphql(`
    query AllPagesQuery {
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

  try {
    fs.writeFileSync("./public/themeStylesheet.css", data.wp.themeStylesheet); // To get theme style from BO
  } catch (error) {}
  
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