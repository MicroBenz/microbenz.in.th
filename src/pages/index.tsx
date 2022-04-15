import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import BlogCard from '../components/Card/BlogCard';

interface BlogProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          slug: string;
          tags: string[];
        }
      }
    }[]
  }
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

function BlogIndex(props: PageProps<BlogProps>) {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO
        isHome
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      {posts.map(({ node }) => <BlogCard data={node} key={node.frontmatter.slug} />)}
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 600, quality: 80, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  }
`;
