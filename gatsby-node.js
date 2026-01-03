exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMdx.nodes

  const blogPostTemplate = require.resolve(
  "./src/templates/blog-post.js"
)

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        previousId: posts[index + 1]?.id || null, // older
        nextId: posts[index - 1]?.id || null,     // newer
      },
    })
  })
}
