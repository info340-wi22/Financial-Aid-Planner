import React from 'react';
import {useState} from 'react';
export function PopUp(props) {
  const [curScholar, setScholar] = useState('');
  const [curLink, setLink] = useState('');
  const [curPerYear, setPerYear] = useState('');
  const [curAmount, setAmount] = useState('');

  console.log('current Scholar', curScholar);
  console.log('current Link', curLink);
  console.log('current PerYear', curPerYear);
  console.log('current Amount', curAmount);

  const handleClick = () => {
    props.toggle();
    setScholar('');
    setLink('');
    setPerYear('');
    setAmount('');
  };

  const handleScholar = (event) => {
    const scholar = event.target.value;
    setScholar(scholar);
  };

  const handleLink = (event) => {
    const link = event.target.value;
    setLink(link);
  };
  const handlePerYear = (event) => {
    const perYear = event.target.value;
    setPerYear(perYear);
  };
  const handleAmount = (event) => {
    const amount = event.target.value;
    setAmount(amount);
  };


  return (
    <div className='pop_bg'>
      <div className='pop_content'>
        <button className='close' onClick={handleClick}>
          &times;
        </button>
        <form>
          <h3>Fill in the Information :)</h3>
          <label>
            Scholarship:
            <input type="text" name="name" onChange={handleScholar}/>
          </label>
          <label>
            link:
            <input type="url" name="name" onChange={handleLink}/>
          </label>
          <label>
            Frequency Per Year:
            <input type="text" name="name" onChange={handlePerYear}/>
          </label>
          <label>
            Amount Paid Per Frequency:
            <input type="text" name="name" onChange={handleAmount}/>
          </label>
          <br />
          <button type="submit" className=''> Submit </button>
        </form>
      </div>
    </div>
  );
}
