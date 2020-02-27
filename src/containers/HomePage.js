import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="jumbotron center">
    <h1 style={{fontFamily:'Pacifico'}} className="lead">Welcome to Media Library</h1>
    <div>
      <ul className="ul-home">
       <li><Link to="/searchImages"><i className="fas fa-image fa-2x"></i><span className="i-home">Check out our HD Images</span></Link></li>
       <li><Link to="/searchVideos"><i  className="fas fa-video fa-2x"></i><span className="i-home">Watch Videos</span></Link></li>
       <li><Link to="/about"><i className="fa fa-info-circle fa-2x" aria-hidden="true"></i><span className="i-home">About</span></Link></li>
      </ul>
    </div>
  </div>
);

export default HomePage;