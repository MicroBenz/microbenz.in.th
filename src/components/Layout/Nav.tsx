import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const MainNav = styled.nav`
  @media (max-width: 600px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Branding = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center !important;
`;

// const BetaTag = styled.div`
//   margin-right: 16px;
// `;

const WebringContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const WebringLink = styled.a`
  display: flex;
`;

const NavContainer = styled.div`
  @media screen and (max-width: 1087px) {
    display: flex !important;
    flex-direction: row;
  }
`;

const Nav: React.FC = () => (
  <nav
    className="w-full z-50 fixed top-0 left-0 right-0 has-shadow bg-white h-16 shadow-md"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container h-full items-center flex mx-auto">
      <div className="flex-1">
        <Link className="flex items-center flex-grow-0 flex-shrink-0" to="/">
          <StaticImage
            alt="MicroBenz"
            src="./logo.png"
            width={48}
          />
        </Link>
        {/* <BetaTag className="tag is-danger">Beta</BetaTag> */}

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
      </div>
      <div className="flex justify-end items-center">
        <a className="flex" href="https://webring.wonderful.software#microbenz.in.th" title="วงแหวนเว็บ" target="_blank" rel="noopener noreferrer">
          <img
            alt="วงแหวนเว็บ"
            width="32"
            height="32"
            src="https://webring.wonderful.software/webring.black.svg"
          />
        </a>
      </div>
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
  </nav>
);

export default Nav;
