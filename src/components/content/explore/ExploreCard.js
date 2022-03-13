import React from 'react';

export default function Card({viewId, copyId}) {
  return (
    <div className="explore-plan">
      <p>TOTAL COST OF COLLEGE PER YEAR:50000</p>
      <p>AMOUNT WANT TO COVER:10000</p>
      <p>POTENTIAL AID:23000</p>
      <p>College:Something</p>
      <button type="button" id={viewId} className="card-button">View</button>
      <button type="button" id={copyId} className="card-button">Copy</button>
    </div>
  );
}

