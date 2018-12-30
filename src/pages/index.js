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
  margin-bottom: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const BlogImage = styled.div`
  max-width: 300px;
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 16px;
  }
`

const ContentContainer = styled.div`
  padding-left: 16px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`

const Tag = styled.span`
  margin-right: 8px;
`

const BlogLink = styled(Link)`
  box-shadow: none;
`

const DateText = styled.small`
  color: #000;
`

const BlogTitle = styled.h3`
  margin-bottom: 8px !important;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          isHome
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags || []
          return (
            <BlogLink to={node.fields.slug} key={node.fields.slug}>
              <BlogContainer key={node.fields.slug}>
                {node.frontmatter.featuredImage && (
                  <BlogImage>
                    <Img
                      // src={
                      //   node.frontmatter.featuredImage.childImageSharp.fluid.src
                      // }
                      // srcSet={
                      //   node.frontmatter.featuredImage.childImageSharp.fluid
                      //     .srcSet
                      // }
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      // sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                    />
                  </BlogImage>
                )}
                <ContentContainer>
                  <BlogTitle className="title is-4">{title}</BlogTitle>
                  {tags.length > 0 && (
                    <div>
                      {tags.map(tag => (
                        // <Link to={`/tags/${tag}`}>
                        <Tag className="tag is-info">{tag}</Tag>
                        // </Link>
                      ))}
                    </div>
                  )}
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </ContentContainer>
              </BlogContainer>
            </BlogLink>
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
            title
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
