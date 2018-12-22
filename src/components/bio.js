import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GImage from 'gatsby-image'
import styled from 'styled-components'

const Image = styled(GImage)`
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
  margin-right: 8px;
`

function Bio({ date }) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
            }}
          >
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <div>
              <p>
                <strong>{author}</strong>
              </p>
              {date && <p>{date}</p>}
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
