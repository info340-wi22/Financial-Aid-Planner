import React from 'react';
import {NavLink} from 'react-router-dom';
import {Profile} from './Profile';

export default function NavBar() {
  return (
    <>
      <nav className="menu">
        <NavLink to="/main">Current Plan</NavLink>
        <NavLink to="/plan">Plans</NavLink>
        <NavLink to="/explore">Explore</NavLink>

      </nav>
      <img className="navimage" src="\imgs\learn.png"
        alt="LearnNotSpend logo" />
      <h1>Learn, Not Spend</h1>
      <Profile/>
    </>
  );
}
