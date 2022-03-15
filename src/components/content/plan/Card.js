import React, {useState, useEffect} from 'react';
import {getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';

export default function Card(props) {
  // const {name, status, toDo, amount, link} = props;
  const dataCard = props.ScholarInfo;
  const {id} = props;
  const db = getDatabase();
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    const userRef = ref(db, props.user + '/Plans/'+props.currentPlan+'/Cards/');

    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      if (allPlansObject !== null) {
        const planKeyArray = Object.keys(allPlansObject);
        const allPlansArray = planKeyArray.map((keyString) => {
          const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
          return whichObject;
        });
        // usually save to state
        setPlan(allPlansArray);
      }
    });
    // cleanup function for when component is removed
    function cleanup() {
      off(); // turn off all listeners
    }
    return cleanup; // effect hook callback returns the cleanup function
  }, [db]);
  const handleClick = () => {
    const newCards = plan.filter((card, index) => {
      if (index != props.id) {
        return card;
      }
    });
    console.log(newCards);
    // To Do: add Delete Need to remove card from DB and then force rerender
    console.log(props.id);
    const userRef = ref(db, props.user + '/Plans/'+props.currentPlan+'/Cards/');
    firebaseSet(userRef, newCards)
        .then(() => console.log('added card successfully'))
        .catch((err) => console.log(err)); // log any errors for debugging
  };
  return (
    <div className='card'>
      <button className='delete-button' onClick={handleClick}>&#10005;</button>
      <Title title={dataCard.ScholarshipName} link={dataCard.ScholarshipLink} />
      <Status status={dataCard.ScholarStatus} />
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
  const db = getDatabase();
  const userRef = ref(db, props.user +'/Plans/'+props.currentPlan + '/Cards/' + (props.id) + '/ScholarshipReqs');
  const toDo = props.toDo !== undefined ? props.toDo : [];
  const [show, setShow] = useState(false);
  const [newToDo, setNewToDo] = useState('');

  const handleClick = () => {
    setShow(!show);
  };
  const handleChange = (event) => {
    // toDo.push(event.target.value);
    setNewToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    if (toDo === undefined) {
      toDo = [newToDo];
    } else {
      toDo.push(newToDo);
    }
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
  const yearly = amount.FreqYear * amount.AmountPerF;
  return (
    <div className='amount'>
      <p>Frequency Per Year: {amount.FreqYear}</p>
      <p>Amount Paid Per Frequency: {amount.AmountPerF}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}