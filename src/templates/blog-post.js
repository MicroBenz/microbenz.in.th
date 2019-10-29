import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import SocialShare from '../components/Share/SocialShare'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { test: Test },
}).Compiler

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
    const coverImg = post.frontmatter.featuredImage.childImageSharp.sizes.src
    const slug = post.frontmatter.slug;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          img={coverImg}
          title={post.frontmatter.title}
          description={post.excerpt}
        />
        <h1 className="title">{post.frontmatter.title}</h1>
        <FeaturedImage
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
        />
        {/* <Bio date={post.frontmatter.date} /> */}
        <div className="content">{renderAst(post.htmlAst)}</div>
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
        <SocialShare frontmatter={post.frontmatter} />
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
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 768, quality: 80) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
        slug
      }
    }
  }
`
