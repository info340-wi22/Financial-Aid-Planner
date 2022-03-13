import React from 'react';

import CardList from './ExploreCardList';
import { getDatabase } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth();

onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser){ //firebaseUser defined: is logged in
        console.log('logged in', firebaseUser.displayName);
        //do something with firebaseUser (e.g. assign to a state variable)
    }
    else { //firebaseUser is undefined: is not logged in
        console.log('logged out');
    }
});

export default function Explore() {
  // Get a reference to the database service
  const db = getDatabase();
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
      <form>
        <div className='college-wrapper'>
          <label htmlFor="college" id="college-text">College:</label>
          <input type="text" id="college" name="college"/>
        </div>
        <div className="aid-range-wrapper">
          <label htmlFor="aid-range">Aid Range:</label>
          <input type="range" min="1" max="100" defaultValue="50" className="aid-range" id="aid-range"/>
        </div>
      </form>
    </div>
  );
}