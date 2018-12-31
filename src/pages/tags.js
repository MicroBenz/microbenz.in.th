import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const TagPage = props => {
  const { data } = props
  const tags = data.allMarkdownRemark.group.map(
    eachGroup => eachGroup.fieldValue
  )
  return (
    <Layout location={props.location}>
      <p>Tag Index</p>
      {tags.map(tag => (
        <Link to={`/tags/${tag}`}>{tag}</Link>
      ))}
    </Layout>
  )
}

export default TagPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000 # filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
