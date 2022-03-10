import React from 'react';
import {useState} from 'react';
import {MySignInScreen} from './Login';

export function Profile() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <button className="profile-button" onClick={handleClick}>
        <img className="profile" src=".\imgs\profile-icon.webp" alt="Profile"/>
      </button>
      {state ? <div className='Sign-In'><MySignInScreen close={handleClick}/></div> : null}
    </>
  );
}