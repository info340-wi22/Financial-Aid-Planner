import React, {useState, useEffect} from 'react';
import {getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';

export default function Card(props) {
  const [currentPlan, setCurrentPlan] = useState(true);

  const db = getDatabase();
  useEffect(() => {
    const userRef = ref(db, props.user+"/Plans/Current Plan");
    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      if(allPlansObject === null)
		  setCurrentPlan(false);
	  else
		  setCurrentPlan(true);
      });
  })
  const copyCard = () => {
    const userRef = ref(db, props.user + '/Plans/' + props.cardInfo.firebaseKey);
    firebaseSet(userRef, props.cardInfo)
        .then(() => console.log('added plan successfully'))
        .catch((err) => console.log(err)); // log any errors for debugging
	if(!currentPlan) {
	  const currentPlanRef = ref(db, props.user + '/Plans/Current Plan');
      firebaseSet(currentPlanRef, props.cardInfo.firebaseKey)
      .then(() => console.log('set current plan successfully!'))
      .catch((err) => console.log(err)); // log any errors for debugging
	}
  };
  return (
    <div className="explore-plan">
      <p>TOTAL COST OF COLLEGE PER YEAR: {props.cardInfo.TotalCostCollege}</p>
      <p>AMOUNT WANT TO COVER: {props.cardInfo.AmountCover}</p>
      <p>POTENTIAL AID: {props.cardInfo.PotentialAid}</p>
      <p>College: {props.cardInfo.College}</p>
      <button type="button" id={'view' + props.pos} className="card-button" >View</button>
      <button type="button" id={'copy' + props.pos} className="card-button" onClick={copyCard}>Copy</button>
    </div>
  );
}

