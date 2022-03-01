import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <header>
        <nav className="menu">
          <NavLink to="/main">Current Plan</NavLink>
          <NavLink to="/plan">Plans</NavLink>
          <NavLink to="/explore">Explore</NavLink>

        </nav>
        <img className="navimage" src="\imgs\learn.png"
          alt="LearnNotSpend logo" />
        <h1>Learn, Not Spend</h1>
        <img className="profile" src=".\imgs\profile-icon.webp" alt="Profile" />
      </header>
    </div>);
}
