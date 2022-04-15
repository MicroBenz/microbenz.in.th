import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;

interface SEOPageProps {
  description?: string;
  lang?: string;
  meta?: { name: string; content: string; }[];
  keywords?: string[];
  title: string;
  isHome?: boolean;
  img?: string;
}

const SEO: React.FC<SEOPageProps> = (props) => {
  const {
    description,
    lang = 'en',
    meta = [],
    keywords = [],
    title,
    isHome = false,
    img,
  } = props;
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description ?? data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${isHome ? '' : '%s | '}${
              data.site.siteMetadata.title
            }`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              (img
                ? {
                  property: 'og:image',
                  content: `${data.site.siteMetadata.siteUrl}${img}`,
                }
                : {}),
              (img
                ? {
                  property: 'og:image:width',
                  content: 1400,
                }
                : {}),
              (img
                ? {
                  property: 'og:image:height',
                  content: 751,
                }
                : {}),
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                  : [],
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
};

export default SEO;