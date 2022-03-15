import React, {useState} from 'react';
import {getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';

export default function Card(props) {
  // const {name, status, toDo, amount, link} = props;
  const dataCard = props.ScholarInfo;
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
      <Title title={dataCard.ScholarshipName} link={dataCard.ScholarshipLink} />
      <Status status={dataCard.ScholarStatus} user={props.user} id={id} currentPlan={props.currentPlan}/>
      <ToDo toDo={dataCard.ScholarshipReqs} user={props.user} id={id} currentPlan={props.currentPlan}/>
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
  let initialStatus = 'planning';
  const db = getDatabase();
  const userRef = ref(db, props.user +'/Plans/'+props.currentPlan + '/Cards/' + (props.id) + '/ScholarStatus');
  onValue(userRef, (snapshot) => {
    initialStatus = snapshot.val();
  });
  const [status, setStatus] = useState(initialStatus);
  const handleClick = () => {
    const nextStatus = statuses.pop();
    statuses.unshift(nextStatus);
    setStatus(nextStatus);
    firebaseSet(userRef, nextStatus)
        .then(() => console.log('added status successfully'))
        .catch((err) => console.log(err));
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
  const db = getDatabase();
  const userRef = ref(db, props.user +'/Plans/'+props.currentPlan + '/Cards/Card ' + (props.id+1) + '/ScholarshipReqs');
  const toDo = props.toDo;
  const [show, setShow] = useState(false);
  const [newToDo, setNewToDo] = useState('');

  const handleClick = () => {
    setShow(!show);
  };
  const handleChange = (event) => {
    setNewToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    toDo.push(newToDo);
    firebaseSet(userRef, toDo)
        .then(() => console.log('card to do updated successfully!'))
        .catch((err) => console.log(err)); // log any errors for debugging
  };
  let item = null;
  if (toDo !== undefined) {
    item = toDo.map((card, index) => {
      return (
        <CheckBox text={card} key={index}/>
      );
    });
  }
  return (
    <div className='to-do'>
      {item}
      <div className='todo-add-div'>
        <button className='add-todo' onClick={handleClick}>&#43;</button>
        {
        show ?
        <form>
          <label htmlFor='todo-item'></label>
          <input type="text" name="todo-item" onChange={handleChange}/>
          <input type='submit' value='Click to submit'onClick={handleSubmit}/>
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
  let yearly = 0;
  if (amount ==! undefined) {
    yearly = amount.FreqYear * amount.AmountPerF;
  }
  return (
    <div className='amount'>
      <p>Frequency Per Year: {amount.FreqYear}</p>
      <p>Amount Paid Per Frequency: {amount.AmountPerF}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}