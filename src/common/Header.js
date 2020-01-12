import React from 'react';
//import { Link, IndexLink } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <Link to="library">Library</Link>
    </nav>
  </div>
);

export default Header;
