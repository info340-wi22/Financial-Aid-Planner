import React from 'react';

import {getAuth, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export function LogOut() {
  const navigate = useNavigate();
  const auth = getAuth();

  const signout = () => {
    signOut(auth).then(() => {
      return navigate('/');
    }).catch((error) => {});
  };

  return (
    <div className='logout'>
      <button onClick={signout}>Logout</button>
    </div>
  );
}