import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <Title title={props.name}/>
      <Status status={props.status}/>
      <ToDo toDo={props.toDo}/>
      <Amount amount={props.amount}/>
    </div>
  );
}

function Title(props) {
  return (
    <div className='title'>
      <p>{props.title}</p>
      <a href=''>Link to Scholarship</a>
    </div>
  );
}

function Status(props) {
  return (
    <div className='status accepted'>
      <p>Current Status: {props.status}</p>
    </div>
  );
}

function ToDo(props) {
  const toDo = props.toDo.map((card, index) => {
    return <div key={'checkbox'+index}><CheckBox text={card}/></div>;
  });
  return (
    <div className='to-do'>
      {toDo}
    </div>
  );
}

function CheckBox(props) {
  return (
    <div className='checkbox-wrapper'>
      <input type="checkbox" name='cardbox'></input>
      <label htmlFor='cardboox'>{props.text}</label>
    </div>
  );
}

function Amount(props) {
  const yearly = props.amount.freq*props.amount.per;
  return (
    <div className='amount'>
      <p>Frequency Per Year: {props.amount.freq}</p>
      <p>Amount Paid Per Frequency: {props.amount.per}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}