import React from 'react';

export default function Card({name, status, toDo, amount, link}) {
  return (
    <div className='card'>
      <Title title={name} link={link} />
      <Status status={status} />
      <ToDo toDo={toDo} />
      <Amount amount={amount} />
    </div>
  );
}

function Title({title, link}) {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noreferrer noopener" alt='Link to ScholarShip'>Link to Scholarship</a>
    </div>
  );
}

function Status({status}) {
  return (
    <div className='status accepted'>
      <p>Current Status: {status}</p>
    </div>
  );
}

function ToDo({toDo}) {
  const item = toDo.map((card, index) => {
    return (
      <CheckBox text={card} key={index}/>
    );
  });
  return (
    <div className='to-do'>
      {item}
    </div>
  );
}

function CheckBox({text}) {
  return (
    <div className='checkbox-wrapper'>
      <input type="checkbox" name='cardbox'></input>
      <label htmlFor='cardboox'>{text}</label>
    </div>
  );
}

function Amount({amount}) {
  const yearly = amount.freq * amount.per;
  return (
    <div className='amount'>
      <p>Frequency Per Year: {amount.freq}</p>
      <p>Amount Paid Per Frequency: {amount.per}</p>
      <p>Total Amount Per Year: {yearly}</p>
    </div>
  );
}