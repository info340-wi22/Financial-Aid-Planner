import React from 'react';

export default function Card() {
  return (
    <div className='card'>
      <Title/>
      <Status/>
      <ToDo/>
      <Amount/>
    </div>
  );
}

function Title() {
  return (
    <div className='title'>
      <p>Scholarship</p>
      <a href=''>Link to Scholarship</a>
    </div>
  );
}

function Status() {
  return (
    <div className='status accepted'>
      <p>Current Status: Acctped</p>
    </div>
  );
}

function ToDo() {
  return (
    <div className='to-do'>
      <CheckBox/>
      <CheckBox/>
      <CheckBox/>
    </div>
  );
}

function CheckBox() {
  return (
    <div className='checkbox-wrapper'>
      <input type="checkbox" name='cardbox'></input>
      <label htmlFor='cardboox'>Get A letter of rec</label>
    </div>
  );
}

function Amount() {
  return (
    <div className='amount'>
      <p>Frequency Per Year: 3</p>
      <p>Amount Paid Per Frequency: 3000</p>
      <p>Total Amount Per Year</p>
    </div>
  );
}