import React from 'react';

export function PopUp(props) {
  const handleClick = () => {
    props.toggle();
    console.log('been here');
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
            <input type="text" name="name" />
          </label>
          <label>
            link:
            <input type="url" name="name" />
          </label>
          <label>
            Frequency Per Year:
            <input type="text" name="name" />
          </label>
          <label>
            Amount Paid Per Frequency:
            <input type="text" name="name" />
          </label>
          <br />
          <button type="submit" className=''> Submit </button>
        </form>
      </div>
    </div>
  );
}
