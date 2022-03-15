import React from 'react';
import {getDatabase, ref, set as firebaseSet} from 'firebase/database';
export function PlanCard(props) {
  const db = getDatabase();
  const setCurrentPlan = () => {
    const userRef = ref(db, props.user + '/Plans/Current Plan');
    console.log('current id: ' + props.id);
    console.log('current cardInFo: ' + props.cardInfo);
    console.log('current User: '+ props.user);
    firebaseSet(userRef, props.cardInfo.firebaseKey)
        .then(() => console.log('current plan set successfully!'))
        .catch((err) => console.log(err)); // log any errors for debugging
  };
  return (
    <div className="plan_page">
      <p>TOTAL COST OF COLLEGE PER YEAR: {props.cardInfo.TotalCostCollege}</p>
      <p>AMOUNT WANT TO COVER: {props.cardInfo.AmountCover}</p>
      <p>POTENTIAL AID: {props.cardInfo.PotentialAid}</p>
      <p>College: {props.cardInfo.College}</p>
      <button type="button" id={'view' + props.pos} className="card-button" >View</button>
      <button type='button' className='card-button' onClick={setCurrentPlan}>Set Current Plan</button>
    </div>

  );
}