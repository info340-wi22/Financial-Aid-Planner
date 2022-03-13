import React, {useState, useEffect } from 'react';

import CardList from './ExploreCardList';
import { getDatabase, ref, onValue} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function Explore() {
 
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [cardList, setCardList] = useState([]);
onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser){ //firebaseUser defined: is logged in
        console.log('logged in', firebaseUser.uid);
		setUser(firebaseUser);
        //do something with firebaseUser (e.g. assign to a state variable)
    }
    else { //firebaseUser is undefined: is not logged in
        console.log('logged out');
    }
  });
  const db = getDatabase();
  useEffect(() => {
  const userRef = ref(db, "Plans/");
  const off = onValue(userRef, (snapshot) => {
	const allPlansObject = snapshot.val(); //get the JSON from the reference
	const planKeyArray = Object.keys(allPlansObject) 
	const allPlansArray = planKeyArray.map((keyString) => {
	const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
	  return whichObject;
	})

	//usually save to state
	setCardList(allPlansArray)
  })

  //cleanup function for when component is removed
  function cleanup() {
	off(); //turn off all listeners
  }
  return cleanup; //effect hook callback returns the cleanup function
  }, [db])
  console.log(cardList);
  return (
	<div className='explore-page'>
	  <FilterBy/>
	  <CardList cardList={cardList}/>
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