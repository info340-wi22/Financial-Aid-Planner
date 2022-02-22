import React from 'react';

export default function Card(props) {
  const {name, status, toDo, amount} = props;
  return (
    <div className='card'>
      <Title title={name}/>
      <Status status={status}/>
      <ToDo toDo={toDo}/>
      <Amount amount={amount}/>
    </div>
  );
}

function Title(props) {
  const {title} = props;
  return (
    <div className='title'>
      <p>{title}</p>
      <a href=''>Link to Scholarship</a>
    </div>
  );
}

function Status(props) {
  const {status} = props;
  return (
    <div className='status accepted'>
      <p>Current Status: {status}</p>
    </div>
  );
}

function ToDo(props) {
  const {item} = props;
  const toDo = item.map((card, index) => {
    return <div key={'checkbox' + index}><CheckBox text={card}/></div>;
  });
  return (
    <div className='to-do'>
      {toDo}
    </div>
  );
}

function CheckBox(props) {
  const {text} = props;
  return (
    <div className='checkbox-wrapper'>
      <input type="checkbox" name='cardbox'></input>
      <label htmlFor='cardboox'>{text}</label>
    </div>
  );
}

function Amount(props) {
  const {amount} = props;
  const yearly = amount.freq * amount.per;
  return (
    <div className='amount'>
      <p>Frequency Per Year: {amount.freq}</p>
      <p>Amount Paid Per Frequency: {amount.per}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}