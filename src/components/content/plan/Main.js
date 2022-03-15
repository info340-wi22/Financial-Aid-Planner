import React, {useState, useEffect} from 'react';
import UserInput from './UserInput';
import {CardList} from './CardList';
import {useParams} from 'react-router-dom';
import {getDatabase, ref, onValue} from 'firebase/database';

export function Main(props) {
  const urlParams = useParams();
  const planName = urlParams.planName;
  const [cardList, setCardList] = useState(props.data);
  const [curScholar, setScholar] = useState('');
  const [curLink, setLink] = useState('');
  const [curPerYear, setPerYear] = useState('');
  const [curAmount, setAmount] = useState('');
  const addPost = (costPerYear, amountCover, currentAid, potentialAid, amountLeft) => {
    const newPost = {
      yearlyCost: costPerYear,
      userCover: amountCover,
      userAid: currentAid,
      userPotential: potentialAid,
      userAmountNeed: amountLeft,
    };
  };

  const setScholarCallBack = (input) => {
    setScholar(input);
  };
  const setLinkCallBack = (input) => {
    setLink(input);
  };
  const setPerYearCallBack = (input) => {
    setPerYear(input);
  };
  const setAmountCallBack = (input) => {
    setAmount(input);
  };
  const loc = planName === undefined ? props.user+'/Plans/' +props.plan : 'Plans/'+planName;
  const db = getDatabase();
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    const userRef = ref(db, loc +'/Cards');

    const off = onValue(userRef, (snapshot) => {
      const allPlansObject = snapshot.val(); // get the JSON from the reference
      console.log(snapshot.val());
      if (allPlansObject !== null) {
        const planKeyArray = Object.keys(allPlansObject);
        const allPlansArray = planKeyArray.map((keyString) => {
          const whichObject = {...allPlansObject[keyString], firebaseKey: keyString};
          return whichObject;
        });
        console.log(allPlansArray);
        // usually save to state
        setPlan(allPlansArray);
      }
    });
    // cleanup function for when component is removed
    function cleanup() {
      off(); // turn off all listeners
    }
    return cleanup; // effect hook callback returns the cleanup function
  }, [db, loc]);
  const addCard = () => {
    // Update this to add the card to the database
    setCardList([...cardList, {ScholarShipName: curScholar, ScholarStatus: 'Accepted', ScholarShipReqs: ['Get A Letter of Rec', 'Get A Letter of Rec', 'Get A Letter of Rec'], Amount: {FreqYear: curPerYear, AmountPerF: curAmount}, ScholarLink: curLink}]);
  };
  console.log(props.user);
  return (
    <>
      <UserInput onSubmit={addPost} addCard={addCard}
        cards={plan}
        setScholar={setScholarCallBack}
        setLink={setLinkCallBack}
        setPerYear={setPerYearCallBack}
        setAmount={setAmountCallBack}
      />
      <CardList user={props.user} cards={plan} plan={props.plan} />
    </>
  );
}