import React, {useState, useEffect } from 'react';

import CardList from './ExploreCardList';
import { getDatabase, ref, onValue} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function Explore() {
 
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [filteredCardList, setFilteredCardList] = useState([]);

  const filter = (uniName, min, max) => {
	  console.log("range: "+min+"-"+max);
	  const filtered = cardList.filter((plan)=>{return plan.College.includes(uniName) && plan.PotentialAid >= min&&plan.PotentialAid<=max})
	  setFilteredCardList(filtered);
  }
onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser){ //firebaseUser defined: is logged in
        console.log('logged in', firebaseUser.uid);
		setUser(firebaseUser.uid);
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
	setCardList(allPlansArray);
	setFilteredCardList(allPlansArray);
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
	  <FilterBy filter = {filter}/>
	  <CardList cardList={filteredCardList} user={user}/>
	</div>
  );
}
function FilterBy(props) {
  const [filterName, setFilterName] = useState("");
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(9999999);
  const handleFilterClick = (event) => {
	props.filter(filterName, minAmount, maxAmount);
  }
  const inputChange = (event) => {
	  setFilterName(event.target.value);
  }
  const minRange = (event) => {
	  setMinAmount(event.target.value);
  }
  const maxRange = (event) => {
	  if(event.target.value == "")
		setMaxAmount(9999999);
	  else
	    setMaxAmount(event.target.value);
  }
  return (
    <div className="filter-by">
      <p id="filter-text">Filter By</p>
      <button type="button" id="filter-button">Filter By</button>
      <form>
        <div className='college-wrapper'>
          <label htmlFor="college" id="college-text">College:</label>
          <input type="text" id="college" name="college" onChange={inputChange}/>
        </div>
        <div className="aid-range-wrapper">
          <label htmlFor="aid-range">Aid Range:</label>
          <input type="number" id="minRange" name="minRange" onChange={minRange}/>
		  <p> - </p>
		  <input type="number" id="maxRange" name="maxRange" onChange={maxRange}/>
        </div>
      </form>
	  <button type="button" id="filter-submit" onClick={handleFilterClick}>Submit</button>
    </div>
  );
}