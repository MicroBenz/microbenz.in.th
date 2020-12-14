import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainNav = styled.nav`
  height: 58px;
  @media (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`

const Branding = styled.div`
  justify-content: center;
  align-items: center !important;
`

const Tag = styled.div`
  width: fit-content;
`;

const Nav = props => {
  return (
    <MainNav
      className="fixed top-0 left-0 right-0 bg-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="h-full">
        <div className="flex items-center justify-center h-full navbar-brand">
          <Link className="h-full navbar-item" to="/">
            <img className="block h-full" src={require('./logo.png')} />
          </Link>
          <Tag className="bg-red-400 rounded-lg">Beta</Tag>
        </div>
      </div>
    </MainNav>
  )
}

export default Nav
