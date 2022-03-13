import React from 'react';

export default function Card(props) {
  return (
    <div className="explore-plan">
      <p>TOTAL COST OF COLLEGE PER YEAR: {props.cardInfo.TotalCostCollege}</p>
      <p>AMOUNT WANT TO COVER: {props.cardInfo.AmountCover}</p>
      <p>POTENTIAL AID: {props.cardInfo.PotentialAid}</p>
      <p>College: {props.cardInfo.College}</p>
      <button type="button" id={"view"+props.cardInfo.key} className="card-button">View</button>
      <button type="button" id={"copy"+props.cardInfo.key} className="card-button">Copy</button>
    </div>
  );
}

