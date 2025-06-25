import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header_bar">
      <Link to="/">
        <button className="home_button">Home</button>
      </Link>
      <input className="search_bar" placeholder="Search"></input>
    </div>
  );
}

export default Header; 