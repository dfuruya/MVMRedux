import React from 'react';
import { Link } from 'react-router';

const NavBarLayout = props => 
  <div className="navbar-layout">
    <h2>
      {props.isAuthenticated
        ? <div>
            <Link to="/login" onClick={e => props.handleLogout(e)}>Sign Out</Link>
            {` - `}
            <Link to="/search">Search Recipes</Link>
            {` - `}
            <Link to="/favs">Your Favorites</Link>
          </div>
        : <div>
            <Link to="/login">Log In</Link>
            {` - `}
            <Link to="/signup">Sign Up</Link>
          </div>
      }
    </h2>
  </div>

export default NavBarLayout;
