import React from 'react';

import CardList from './PlanCardList';

export default function Explore() {
  return (
    <div className='explore-page'>
      <FilterBy/>
      <CardList/>
    </div>
  );
}

function FilterBy() {
  return (
    <div className="filter-by">
      <p id="filter-text">Filter By</p>
      <button type="button" id="filter-button">Filter By</button>
      <form className="college-wrapper" id="filter-form">
        <label htmlFor="college" id="college-text">College:</label>
        <input type="text" id="college" name="college"/>
      </form>
      <form className="aid-range-wrapper">
        <label htmlFor="aid-range">Aid Range:</label>
        <input type="range" min="1" max="100" defaultValue="50" className="aid-range" id="aid-range"/>
      </form>
    </div>
  );
}