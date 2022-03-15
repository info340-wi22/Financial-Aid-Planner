
import React, {useState, useEffect} from 'react';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {PlanCardList} from './PlanCardList';

export function PlanPage() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [popUpShow, setPopUpShow] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [collegeName, setCollegeName] = useState('');
  const [planName, setplanName] = useState('');

  const handleCollege = (event) => {
    setCollegeName(event.target.value);
  };

  const handlePlan = (event) => {
    setplanName(event.target.value);
  };

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
    const userRef = ref(db, user + '/Plans');
    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      if (allPlansObject !== null && allPlansObject !== undefined) {
        const planKeyArray = Object.keys(allPlansObject);
        const allPlansArray = planKeyArray.map((keyString) => {
          const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
          return whichObject;
        });
        // usually save to state
        setCardList(allPlansArray);
        console.log(allPlansArray);
      }
    });

    // cleanup function for when component is removed
    function cleanup() {
      off(); // turn off all listeners
    }
    return cleanup; // effect hook callback returns the cleanup function
  }, [db, user]);
  const createPlanHandler = () => {
    // console.log('test the plan handler');
    setPopUpShow(!popUpShow);
    setCollegeName('');
    setplanName('');
  };

  const submitHandler = () => {
    setPopUpShow(!popUpShow);
    setCollegeName('');
    setplanName('');
    console.log('test scholar name: ' + planName);
    const planRef = ref(db, user + '/Plans/' + planName);
    // const planRef = ref(db, user + '/Plans');
    const newPlan = {
      'Cover Amount': 1,
      'Cards': null,
      'College': collegeName,
      'PotentialAid': 2,
      'TotalCostCollege': 3,
      'firebaseKey': planName,
    };
    set(planRef, newPlan)
        .then(() => console.log('created the new Plan!'))
        .catch((err) => console.log(err));
  };


  return (
    <div>
      <label className="plan_label">Your current Plans are: </label>
      <button type="button" className='card-button' onClick={createPlanHandler}>Create a Plan</button>
      {popUpShow ?
        <div className='pop_bg'>
          <div className='pop_content'>
            <div className='pop-up-header'>
              <h1>Fill in the info for your Plan!</h1>
              <button className='close' onClick={createPlanHandler}>
                &times;
              </button>
            </div>
            <form className='pop-up-form'>
              <label className="pop-up-label">Plan Name: </label>
              <input className='pop-up-input' type="text" name="Plan" value={planName} onChange={handlePlan}></input>
              <label className="pop-up-label">College: </label>
              <input className='pop-up-input' type="text" name="college" value={collegeName} onChange={handleCollege}></input>
            </form>
            <button type="submit" className='form_submit' onClick={submitHandler}> Submit </button>
          </div>
        </div> : null}
      <PlanCardList cardList={cardList} user={user}></PlanCardList>
    </div>
  );
}