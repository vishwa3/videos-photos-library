import React from 'react';
//import { Link, IndexLink } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
const Header = () => (
 /*  <div className="text-center">
    <nav className="navbar navbar-default">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <Link to="library">Library</Link>
    </nav>
  </div> */

  <div className="text-center fixNav">
    <nav className="navbar navbar-default ">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
          <Link to="searchImages">Search Images</Link>
          </li>
          <li className="nav-item">
          <Link to="searchVideos">Search Videos</Link>
          </li>
          <li className="nav-item">
            <Link to="library">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div> 

);

export default Header;
