import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Nav from './Nav'
import './app.scss'

const GlobalStyle = createGlobalStyle`
  /* body {
    font-family: 'Sarabun', Tahoma, sans-serif;
  } */
`

const SiteTitle = styled.h1`
  margin-top: 0;
`

const HomeLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <SiteTitle>
    //       <HomeLink to={'/'}>{title}</HomeLink>
    //     </SiteTitle>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <main>
        <Nav />
        <Container className="container">
          {/* {header} */}
          {children}
        </Container>
        <GlobalStyle />
      </main>
    )
  }
}

export default Layout
