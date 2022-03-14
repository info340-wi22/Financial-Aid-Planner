import React from 'react';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database'
export default function Card(props) {
	const db = getDatabase();
	const copyCard = () => {
		const userRef = ref(db, props.user +"/Plans/"+props.cardInfo.firebaseKey);
		console.log(props.id);
		console.log(props.cardInfo);
		console.log(props.user);
		firebaseSet(userRef, props.cardInfo)
		.then(() => console.log("data saved successfully!"))
		.catch(err => console.log(err)); //log any errors for debugging
	}
  return (
    <div className="explore-plan">
      <p>TOTAL COST OF COLLEGE PER YEAR: {props.cardInfo.TotalCostCollege}</p>
      <p>AMOUNT WANT TO COVER: {props.cardInfo.AmountCover}</p>
      <p>POTENTIAL AID: {props.cardInfo.PotentialAid}</p>
      <p>College: {props.cardInfo.College}</p>
      <button type="button" id={'view'+props.cardInfo.key} className="card-button">View</button>
      <button type="button" id={'copy'+props.cardInfo.key} className="card-button">Copy</button>
    </div>
  );
}

