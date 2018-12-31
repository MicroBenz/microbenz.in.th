const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const tagPost = path.resolve('./src/templates/tag.js')

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
        const tags = posts.reduce((uniqTagArr, post) => {
          const { tags: postTags } = post.node.frontmatter
          const toAppendTags = postTags.filter(tag => !uniqTagArr.includes(tag))
          return [...uniqTagArr, ...toAppendTags]
        }, [])
        console.log(tags)
        tags.forEach(tag => {
          createPage({
            path: `/tags/${tag}/`,
            component: tagPost,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug,
    })
  }
}
