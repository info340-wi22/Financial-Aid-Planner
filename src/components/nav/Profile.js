import React from 'react';
import {useState} from 'react';
import {LogOut} from './Logout';

export function Profile() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <button className="profile-button" onClick={handleClick}>
        <img className="profile" src=".\imgs\profile-icon.webp" alt="Profile"/>
      </button>
      {show ? <LogOut/> : null}
    </>
  );
}