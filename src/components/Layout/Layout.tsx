import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';
// import './app.scss';

const GlobalStyle = createGlobalStyle`
  /* body {
    font-family: 'Sarabun', Tahoma, sans-serif;
  } */
`;

// const SiteTitle = styled.h1`
//   margin-top: 0;
// `;

// const HomeLink = styled(Link)`
//   box-shadow: none;
//   text-decoration: none;
//   color: inherit;
// `;

// const Container = styled.div`
//   /* padding-top: 80px; */
//   /* padding-bottom: 40px; */
//   @media (max-width: 1200px) {
//     padding-left: 5%;
//     padding-right: 5%;
//   }
// `;

const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <main>
      <Nav />
      <div className="pt-20 pb-20 container mx-auto">
        {/* {header} */}
        {children}
      </div>
      <GlobalStyle />
    </main>
  );
};

export default Layout;
