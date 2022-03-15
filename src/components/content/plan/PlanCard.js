import React from 'react';
import {getDatabase, ref, set as firebaseSet} from 'firebase/database';
import {Link} from 'react-router-dom';
export function PlanCard(props) {
  const db = getDatabase();
  const setCurrentPlan = () => {
    const userRef = ref(db, props.user + '/Current Plan');
    console.log('current id: ' + props.id);
    console.log('current cardInFo: ' + props.cardInfo);
    console.log('current User: '+ props.user);
    firebaseSet(userRef, props.cardInfo.firebaseKey)
        .then(() => console.log('current plan set successfully!'))
        .catch((err) => console.log(err)); // log any errors for debugging
  };
  return (
    <div className="plan_page">
      <p>SCHOLARSHIP: {props.cardInfo.firebaseKey}</p>
      <p>TOTAL COST OF COLLEGE PER YEAR: {props.cardInfo.TotalCostCollege}</p>
      <p>AMOUNT WANT TO COVER: {props.cardInfo.AmountCover}</p>
      <p>POTENTIAL AID: {props.cardInfo.PotentialAid}</p>
      <p>College: {props.cardInfo.College}</p>
      <Link className="btn btn-primary" to={'/main/' + props.cardInfo.firebaseKey}>Visit</Link>
      <button type='button' className='card-button' onClick={setCurrentPlan}>Set Current Plan</button>
    </div>

  );
}