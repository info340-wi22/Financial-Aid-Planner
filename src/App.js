import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {getDatabase, ref, onValue} from 'firebase/database';

import NavBar from './components/nav/NavBar';
import {Main} from './components/content/plan/Main';
import {PlanPage} from './components/content/plan/PlanPage';
import Explore from './components/content/explore/Explore';
import {MySignInScreen} from './components/nav/Login';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [currentPlan, setCurrentPlan] = useState('');
  const db = getDatabase();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) { // firebaseUser defined: is logged in
      console.log('logged in', firebaseUser.uid);
      setUser(firebaseUser.uid);
    // do something with firebaseUser (e.g. assign to a state variable)
    } else { // firebaseUser is undefined: is not logged in
      console.log('logged out');
    }
  });
  useEffect(() => {
    const userRef = ref(db, user+'/Current Plan');
    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      if (allPlansObject !== null) {
        setCurrentPlan(allPlansObject);
      }
    });
    // cleanup function for when component is removed
    function cleanup() {
      off(); // turn off all listeners
    }
    return cleanup; // effect hook callback returns the cleanup function
  }, [db, user]);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<MySignInScreen/>}/>
          <Route path='main' element={<Main plan={currentPlan} user={user}/>}>
            <Route path={':planName'} element={<Main plan={currentPlan} user={''}/>}/>
          </Route>
          <Route path='plan' element={<PlanPage />} />
          <Route path='explore' element={<Explore />} />
          <Route path='*' element={<Navigate to='/main' />} />
        </Routes>
      </main>
    </>
  );
}

export default App;