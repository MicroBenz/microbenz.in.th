import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import BlogCard from '../components/Card/BlogCard'

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        isHome
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {posts.map(({ node }) => {
        return <BlogCard data={node} key={node.frontmatter.slug} />
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            tags
            slug
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
