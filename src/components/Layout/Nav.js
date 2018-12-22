import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainNav = styled.nav`
  @media (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`

const Branding = styled.div`
  justify-content: center;
`

const Nav = props => {
  return (
    <MainNav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <Branding className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={require('./logo.png')} />
          </Link>

          {/* <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a> */}
        </Branding>

        {/* <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </MainNav>
  )
}

export default Nav
