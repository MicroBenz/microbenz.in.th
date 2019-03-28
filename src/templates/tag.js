import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import TagCover from '../components/TagCover'
import BlogCard from '../components/Card/BlogCard'

const TagContainer = styled.div`
  padding: 16px 0;
`

const Tags = props => {
  const { pageContext, data } = props
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  return (
    <Layout location={props.location}>
      <TagCover tag={tag} />
      <TagContainer>
        {edges.map(edge => {
          const { slug, title } = edge.node.frontmatter
          return (
            <Link to={`/${slug}`} key={slug}>
              <BlogCard data={edge.node} />
            </Link>
          )
        })}
      </TagContainer>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
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
