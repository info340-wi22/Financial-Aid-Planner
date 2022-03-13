import React from 'react';
import {Link} from 'react-router-dom';
import {Profile} from './Profile';

export default function NavBar() {
  return (
    <>
      <nav className="menu">
        <Link to="/main">Current Plan</Link>
        <Link to="/plan">Plans</Link>
        <Link to="/explore">Explore</Link>
      </nav>
      <img className="navimage" src="\imgs\learn.png"
        alt="LearnNotSpend logo" />
      <h1>Learn, Not Spend</h1>
      <Profile/>
    </>
  );
}
