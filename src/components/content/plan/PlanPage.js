
import React, {useState, useEffect} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {PlanCardList} from './PlanCardList';

export function PlanPage() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [cardList, setCardList] = useState([]);
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) { // firebaseUser defined: is logged in
      console.log('logged in', firebaseUser.uid);
      setUser(firebaseUser.uid);
      // do something with firebaseUser (e.g. assign to a state variable)
    } else { // firebaseUser is undefined: is not logged in
      console.log('logged out');
    }
  });
  const db = getDatabase();
  useEffect(() => {
    const userRef = ref(db, 'Plans/');
    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      const planKeyArray = Object.keys(allPlansObject);
      const allPlansArray = planKeyArray.map((keyString) => {
        const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
        return whichObject;
      });

      // usually save to state
      setCardList(allPlansArray);
    });

    // cleanup function for when component is removed
    function cleanup() {
      off(); // turn off all listeners
    }
    return cleanup; // effect hook callback returns the cleanup function
  }, [db]);
  return (
    <div>
      <label className="plan_label">Your current Plans are: </label>
      <PlanCardList cardList={cardList} user={user}></PlanCardList>
    </div>
  );
}