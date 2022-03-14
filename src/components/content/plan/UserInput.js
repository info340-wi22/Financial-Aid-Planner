import React, {useState} from 'react';
import {PopUp} from './PopUp';

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
  const sum = props.cards.reduce((prevSum, card) => prevSum + (card.amount.per * card.amount.freq), 0);
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
        <p>Potential Aid: {sum}</p>
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
        <button type="submit" className="card-button" onClick={handleSubmit}>Upload Template</button>
      </div>
      <button type="button" id="arrow-button-r" className="arrow-button">
        Page 3<span className="arrow right"></span></button>
    </div>
  );
}
export default UserInput;
