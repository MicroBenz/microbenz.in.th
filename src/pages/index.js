import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BlogImage = styled(Img)`
  width: 300px;
`

const ContentContainer = styled.div`
  padding-left: 16px;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(posts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <BlogContainer key={node.fields.slug}>
              <BlogImage
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              <ContentContainer>
                <h3 style={{}}>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </ContentContainer>
            </BlogContainer>
          )
        })}
      </Layout>
    )
  }
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
