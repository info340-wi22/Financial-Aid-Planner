import React from 'react';
export function PopUp(props) {
  const handleClick = () => {
    props.toggle();
    props.setScholar('');
    props.setLink('');
    props.setPerYear('');
    props.setAmount('');
  };

  const handleSubmit = () => {
    props.addCard();
    props.toggle();
  };

  const handleScholar = (event) => {
    const scholar = event.target.value;
    props.setScholar(scholar);
  };

  const handleLink = (event) => {
    const link = event.target.value;
    props.setLink(link);
  };
  const handlePerYear = (event) => {
    const perYear = event.target.value;
    props.setPerYear(perYear);
  };
  const handleAmount = (event) => {
    const amount = event.target.value;
    props.setAmount(amount);
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
        </form>
        <button type="submit" className='form_submit' onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
}
