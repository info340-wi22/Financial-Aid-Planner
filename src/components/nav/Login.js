import React from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import {StyledFirebaseAuth} from 'react-firebaseui';

export function MySignInScreen(props) {
  const {close} = props;
  const firebaseUIConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    signInSuccessUrl: '/main',
    callbacks: {
      signinWithAuthResult: () => {
        return false;
      },
    },
  };

  const auth = getAuth();
  return (
    <>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
      <button className='close-login' onClick={close}></button>
    </>
  );
}