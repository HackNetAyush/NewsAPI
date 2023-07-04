import React from 'react';
import './Nav.modules.css';

function Nav() {
  return (
    <>
      <div className="navbar">
        {/* <div className="logo_container">News API</div> */}
        <div className="nav_btns">
          {/* general, business, entertainment, health, science, sports, technology */}
          <div className="category_chip">General</div>
          <div className="category_chip">Business</div>
          <div className="category_chip">Entertainment</div>
          <div className="category_chip">Health</div>
          <div className="category_chip">Science</div>
          <div className="category_chip">Sports</div>
          <div className="category_chip">Technology</div>
        </div>
      </div>
    </>
  );
}

export default Nav;
