import React, {useState} from 'react';
import {PopUp} from './PopUp';
import {Card} from '../explore/ExploreCard';
import {getDatabase, ref, set as firebaseSet} from 'firebase/database';

function UserInput(props) {
  const [amount, setAmount] = useState(0);
  const handleInputAmount = (event) => {
    setAmount(event.target.value);
  };
  const [cover, setCover] = useState('');
  const handleInputCover = (event) => {
    setCover(event.target.value);
  };
  const handleSubmit = (event) => {
    props.onSubmit(amount, cover, 'currentAid', 'potentialAid', 'amountLeft');
  };
  const sum = props.cards.reduce((prevSum, card) =>
    prevSum + (card.Amount.AmountPerF * card.Amount.FreqYear)
  , 0);
  let potentialSum = sum;
  props.cards.forEach((card) => {
    if (card.ScholarStatus === 'rejected' && card.Amount !== undefined) {
      potentialSum -= card.Amount.FreqYear * card.Amount.AmountPerF;
    }
  });
  const db = getDatabase();
  const handleUpload = () => {
    const plan = [];
    console.log(plan);
    plan.push({College: 'Udub', PotentialAid: 1000, TotalCostCollege: 10000});
    console.log(plan);
    const userRef = ref(db, '/Plans/');
    firebaseSet(userRef, plan)
        .then(() => console.log('added card successfully'))
        .catch((err) => console.log(err)); // log any errors for debugging
  };

  const leftOver = (amount - cover - sum) < 0 ? 0 : (amount - cover - sum);

  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };
  return (
    <div className="info">
      <button type="button" id="arrow-button-l" className="arrow-button">
        <span className="arrow left"></span>Page 1</button>

      <div className="text" role="status">
        <form className='info-status'>
          <label htmlFor="cost">Cost of College Per Year:</label>
          <input type="text" id="cost" name="cost" value={amount} onChange={handleInputAmount} />
          <label htmlFor="cover">Amount You Can Cover:</label>
          <input type="text" id="cover" name="cover" value={cover} onChange={handleInputCover} />
        </form>
        <p>Current Aid: {sum}</p>
        <p>Potential Aid: {potentialSum}</p>
        <p>Amount Left: {leftOver}</p>
      </div>
      <div className="buttons">
        <button type="submit" className="card-button" onClick={togglePop}>Fill in Information</button>
        <>
          {seen ?
            <PopUp
              setScholar={props.setScholar}
              setLink={props.setLink}
              setPerYear={props.setPerYear}
              setAmount={props.setAmount} toggle={togglePop} addCard={props.addCard}
            /> :
            null}
        </>
        <button type="submit" className="card-button" onClick={handleUpload}>Upload Template</button>
      </div>
      <button type="button" id="arrow-button-r" className="arrow-button">
        Page 3<span className="arrow right"></span></button>
    </div>
  );
}
export default UserInput;
