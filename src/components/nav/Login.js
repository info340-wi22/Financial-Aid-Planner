import React from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import {StyledFirebaseAuth} from 'react-firebaseui';

export function MySignInScreen() {
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
    <div className='Sign-In'>
      <h1>Welcome to Learn, Not Spend!</h1>
      <p>Please login or sign-up:</p>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
    </div>
  );
}