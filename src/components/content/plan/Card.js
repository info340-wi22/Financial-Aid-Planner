import React from 'react';

export default function Card(props) {
  // const {name, status, toDo, amount, link} = props;
  const dataCard = props.schloarInfo;
  return (
    <div className='card'>
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

function Status(props) {
  const status = props.status;
  let currentStatus= '';
  if (status.Accepted.includes('currentUser')) {
    currentStatus = 'Accepted';
  } else if (status.Rejected.includes('currentUser')) {
    currentStatus = 'Rejected';
  } else if (status.Pending.includes('currentUser')) {
    currentStatus = 'Pending';
  } else {
    currentStatus = 'Planning';
  }
  return (
    <div className={'status ' + currentStatus.toLowerCase()}>
      <p>Current Status: {currentStatus}</p>
    </div>
  );
}

function ToDo(props) {
  const toDo = props.toDo;
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