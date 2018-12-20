import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Sarabun', Tahoma, sans-serif;
  }
`;

const SiteTitle = styled.h1`
  margin-top: 0;
`;

const HomeLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <SiteTitle
        >
          <HomeLink to={'/'}>{title}</HomeLink>
        </SiteTitle>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {header}
        {children}
        <GlobalStyle />
      </div>
    )
  }
}

export default Layout
