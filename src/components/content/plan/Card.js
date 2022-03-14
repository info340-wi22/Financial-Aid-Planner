import React from 'react';
import {useState} from 'react';

export default function Card(props) {
  // const {name, status, toDo, amount, link} = props;
  const dataCard = props.schloarInfo;
  const [remove, setRemove] = useState(false);
  const {id} = props;
  const handleClick = () => {
    // To Do: add Delete Need to remove card from DB and then force rerender
    setRemove(true);
  };
  if (remove) {
    return null;
  }
  return (
    <div className='card'>
      <button className='delete-button' onClick={handleClick}>&#10005;</button>
      <Title title={dataCard.SchloarshipName} link={dataCard.SchloarLink} />
      <Status status={dataCard.SchloarStatus} />
      <ToDo toDo={dataCard.SchloarshipReqs} />
      <Amount amount={dataCard.Amount} />
    </div>
  );
}

function Title(props) {
  const {title, link} = props;
  return (
    <div className='title'>
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noreferrer noopener" alt='Link to ScholarShip'>Link to Scholarship</a>
    </div>
  );
}

const statuses = ['planning', 'accepted', 'rejected', 'pending'];
function Status(props) {
  // This should eventually be changed to pulling status from DB and changing the DB entry
  const [status, setStatus] = useState('planning');
  const handleClick = () => {
    const nextStatus = statuses.pop();
    statuses.unshift(nextStatus);
    setStatus(nextStatus);
  };
  // const status = props.status;
  // let currentStatus= '';
  // if (status.Accepted.includes('currentUser')) {
  //   currentStatus = 'Accepted';
  // } else if (status.Rejected.includes('currentUser')) {
  //   currentStatus = 'Rejected';
  // } else if (status.Pending.includes('currentUser')) {
  //   currentStatus = 'Pending';
  // } else {
  //   currentStatus = 'Planning';
  // }
  return (
    <div className={'status ' + status} onClick={handleClick}>
      <p>Current Status: {status}</p>
    </div>
  );
}

function ToDo(props) {
  const toDo = props.toDo;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const item = toDo.map((card, index) => {
    return (
      <CheckBox text={card} key={index}/>
    );
  });
  return (
    <div className='to-do'>
      {item}
      <div className='todo-add-div'>
        <button className='add-todo' onClick={handleClick}>&#43;</button>
        {
        show ?
        <form>
          <label htmlFor='todo-item'></label>
          <input type="text" name="todo-item"/>
        </form> : null
        }
      </div>
    </div>
  );
}

function CheckBox(props) {
  const text = props.text;
  return (
    <div className='checkbox-wrapper'>
      <input type="checkbox" name='cardbox'></input>
      <label htmlFor='cardboox'>{text}</label>
    </div>
  );
}

function Amount({amount}) {
  const yearly = amount.FreqYear * amount.AmountPerF;
  return (
    <div className='amount'>
      <p>Frequency Per Year: {amount.FreqYear}</p>
      <p>Amount Paid Per Frequency: {amount.AmountPerF}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}