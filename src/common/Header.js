import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default space">
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav vish">
          <li className="nav-item ">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <Link to="searchImages">Check out our HD Images</Link>
          </li>
          <li className="nav-item">
            <Link to="searchVideos">Watch Videos</Link>
          </li>
          <li className="nav-item">
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

);

export default Header;
