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
          <label className='pop-up-label' htmlFor='scholarship'>Scholarship:</label>
          <input className='pop-up-input' type="text" name="scholarship" onChange={handleScholar}/>
          <label className='pop-up-label' htmlFor='link'>link:</label>
          <input className='pop-up-input' type="url" name="link" onChange={handleLink}/>
          <label className='pop-up-label' htmlFor='frequency'>Frequency Per Year:</label>
          <input className='pop-up-input' type="number" name="frequency" onChange={handlePerYear}/>
          <label className='pop-up-label' htmlFor='amount'>Amount Paid Per Frequency:</label>
          <input className='pop-up-input' type="number" name="amount" onChange={handleAmount}/>
        </form>
        <button type="submit" className='form_submit' onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}
