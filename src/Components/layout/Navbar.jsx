import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar nnavbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navar-brand text-white text-lg brand-text" to="/">
              MovieSeriesInfo
            </Link>
          </div>
          <ul className="nabar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo"></i>
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
