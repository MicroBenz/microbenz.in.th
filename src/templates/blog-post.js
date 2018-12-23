import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const FeaturedImage = styled(Img)`
  margin-bottom: 1.5rem;
`

const ViewMoreSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 1.5rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(post)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 className="title">{post.frontmatter.title}</h1>
        <FeaturedImage
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
        />
        {/* <Bio date={post.frontmatter.date} /> */}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr style={{}} />

        <ViewMoreSection>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ViewMoreSection>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
