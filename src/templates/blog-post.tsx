/* eslint-disable new-cap */
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import rehypeReact from 'rehype-react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import SocialShare from '../components/Share/SocialShare';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const FeaturedImage = styled(GatsbyImage)`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const ViewMoreSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 1.5rem;
`;

interface FieldsPageContext {
  frontmatter: {
    title: string;
    slug: string;
    featuredImage: {
      childImageSharp: any;
    }
  }
  fields: {
    slug: string;
  }
}

interface BlogPostProps {
  pageContext: {
    next: FieldsPageContext;
    previous: FieldsPageContext;
  }
  data: {
    site: {
      siteMetadata: {
        title: string;
      }
    }
    markdownRemark: {
      excerpt: string;
      htmlAst: any;
      frontmatter: {
        title: string;
        slug: string;
        featuredImage: {
          childImageSharp: any;
        }
      }
    }
  }
}

const BlogPostTemplate: React.FC<BlogPostProps> = (props) => {
  const { data, pageContext } = props;
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const coverImgObj = getImage(post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp
    : '');
  return (
    <Layout>
      <SEO
        img={coverImgObj?.images.fallback?.src ?? ''}
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <h1 className="title">{post.frontmatter.title}</h1>
      {coverImgObj && (
        <FeaturedImage
          alt={post.frontmatter.title}
          image={coverImgObj}
        />
      )}
      {/* <Bio date={post.frontmatter.date} /> */}
      <div className="content">{renderAst(post.htmlAst)}</div>
      <hr style={{}} />
      <ViewMoreSection>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ←
              {' '}
              {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
              {' '}
              →
            </Link>
          )}
        </li>
      </ViewMoreSection>
      <SocialShare frontmatter={post.frontmatter} />
    </Layout>
  );
};

export default BlogPostTemplate;

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
            gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
          }
        }
        slug
      }
    }
  }
`;
