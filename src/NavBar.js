import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <header>
        <nav className="menu">
          <NavLink to="/main">Current Plan</NavLink>
          <a href="">Plans</a>
          <NavLink to="/explore">Explore</NavLink>

        </nav>
        <img className="navimage" src="\imgs\learn.png"
          alt="LearnNotSpend logo" />
        <p>Learn, Not Spend</p>
        <img className="profile" src=".\imgs\profile-icon.webp" alt="Profile" />
      </header>
    </div>);
}
