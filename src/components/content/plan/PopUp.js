import React from 'react';
export function PopUp({toggle, setScholar, setLink, setPerYear, setAmount, addCard}) {
  const handleClick = () => {
    toggle();
    setScholar('');
    setLink('');
    setPerYear('');
    setAmount('');
  };

  const handleSubmit = () => {
    addCard();
    toggle();
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
        <div className='pop-up-header'>
          <h1>Fill in the Information :)</h1>
          <button className='close' onClick={handleClick}>
            &times;
          </button>
        </div>
        <form className='pop-up-form'>
          <label htmlFor='scholarship'>Scholarship:</label>
          <input type="text" name="scholarship" onChange={handleScholar}/>
          <label htmlFor='link'>link:</label>
          <input type="url" name="link" onChange={handleLink}/>
          <label htmlFor='frequency'>Frequency Per Year:</label>
          <input type="number" name="frequency" onChange={handlePerYear}/>
          <label htmlFor='amount'>Amount Paid Per Frequency:</label>
          <input type="number" name="amount" onChange={handleAmount}/>
        </form>
        <button type="submit" className='form_submit' onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}
