import React from 'react';

export default function NavBar() {
  return (
    <div className="nav">
      <header>
        <nav className="menu">
          <a href="index.html">Current Plan</a>
          <a href="">Plans</a>
          <a href="explore.html" target="_blank">Explore</a>
		 
        </nav>
        <img className="navimage" src="\imgs\learn.png" alt="LearnNotSpend logo"/>
        <p>Learn, Not Spend</p>
		<img className="profile" src=".\imgs\profile-icon.webp" alt="Profile"/>
      </header>
    </div>);
}
