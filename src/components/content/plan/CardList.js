import React, {useState, useEffect} from 'react';
import Card from './Card';
import {getDatabase, ref, onValue} from 'firebase/database';

export function CardList(props) {
  const db = getDatabase();
  const [plan, setPlan] = useState(props.cardList);
  console.log(props.user+'/Plans/' +props.plan);
  useEffect(() => {
    const userRef = ref(db, props.user+'/Plans/' +props.plan + "/Cards");
    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
	    if(allPlansObject !== null) {
		  const planKeyArray = Object.keys(allPlansObject);
		  const allPlansArray = planKeyArray.map((keyString) => {
			const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
			return whichObject;
	      });

		  //usually save to state
		  setPlan(allPlansArray);
		}
	})
	//cleanup function for when component is removed
	function cleanup() {
	  off(); //turn off all listeners
	}
	return cleanup; //effect hook callback returns the cleanup function
  }, [db,props.user])
  const cards = plan.map((cards, index) => <Card id={index} schloarInfo={cards} key={index} user ={props.user} currentPlan={props.currentPlan}/>);
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}