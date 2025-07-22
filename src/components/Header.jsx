import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header_bar">
      <p style={{fontSize: '15px'}}>Get in touch with me at <a style={{fontStyle: 'italic', fontSize: '15px'}} href="mailto: jessjessjohnsonson@gmail.com">jessjessjohnsonson@gmail.com</a></p>
      <Link to="/">
        <button className="home_button">Home</button>
      </Link>
      {/* <input className="search_bar" placeholder="Search"></input> */}
    </div>
  );
}

export default Header; 