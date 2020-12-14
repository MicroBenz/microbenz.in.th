import React from 'react';

import Nav from './Nav'

const Layout = props => {
  const { children } = props;
  return (
    <main>
      <Nav />
      <div className="container">
        {/* {header} */}
        {children}
      </div>
    </main>
  );
}

export default Layout;