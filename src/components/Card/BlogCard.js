import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import kebabCase from '../../utils/kebab-case'

const BlogLink = styled(Link)`
  box-shadow: none;
`

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
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

const BlogTitle = styled.h3`
  margin-bottom: 8px !important;
`

const BlogCard = props => {
  const { data } = props
  const { title, slug, tags = [], featuredImage } = data.frontmatter
  return (
    <BlogLink to={slug}>
      <BlogContainer>
        {featuredImage && (
          <BlogImage>
            <Img fluid={featuredImage.childImageSharp.fluid} />
          </BlogImage>
        )}
        <ContentContainer>
          <BlogTitle className="title is-4">{title}</BlogTitle>
          {tags.length > 0 && (
            <div>
              {tags.map(tag => (
                <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
                  <Tag className="tag is-info">{tag}</Tag>
                </Link>
              ))}
            </div>
          )}
        </ContentContainer>
      </BlogContainer>
    </BlogLink>
  )
}

export default BlogCard
