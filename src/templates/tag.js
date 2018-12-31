import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

const Tags = props => {
  const { pageContext, data } = props
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  console.log(props)
  return (
    <Layout location={props.location}>
      <p>Tag: {tag}</p>
      {edges.map(edge => {
        const { slug, title } = edge.node.frontmatter
        return <Link to={`/${slug}`}>{title}</Link>
      })}
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
          }
        }
      }
    }
  }
`
