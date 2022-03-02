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
        <button className='close' onClick={handleClick}>
          &times;
        </button>
        <form>
          <h1>Fill in the Information :)</h1>
          <label htmlFor='scholarship'>
            Scholarship:
            <input type="text" name="scholarship" onChange={handleScholar}/>
          </label>
          <label htmlFor='link'>
            link:
            <input type="url" name="link" onChange={handleLink}/>
          </label>
          <label htmlFor='frequency'>
            Frequency Per Year:
            <input type="text" name="frequency" onChange={handlePerYear}/>
          </label>
          <label htmlFor='amount'>
            Amount Paid Per Frequency:
            <input type="text" name="amount" onChange={handleAmount}/>
          </label>
        </form>
        <button type="submit" className='form_submit' onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}
