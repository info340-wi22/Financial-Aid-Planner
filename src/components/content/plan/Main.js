import React, {useState} from 'react';
import UserInput from './UserInput';
import {CardList} from './CardList';
import { useParams } from 'react-router-dom';

export function Main(props) {
  const urlParams = useParams();
  const planName = urlParams.planName;
  const [cardList, setCardList] = useState(props.data);
  const [curScholar, setScholar] = useState('');
  const [curLink, setLink] = useState('');
  const [curPerYear, setPerYear] = useState('');
  const [curAmount, setAmount] = useState('');
  const [currentPlanName, setCurrentPlanName] = useState('Plan 1');
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
  const loc = planName === undefined ? props.user+'/Plans/' +props.plan : "Plans/"+planName;
	  
  const addCard = () => {
    setCardList([...cardList, {ScholarShipName: curScholar, ScholarStatus: 'Accepted', ScholarShipReqs: ['Get A Letter of Rec', 'Get A Letter of Rec', 'Get A Letter of Rec'], Amount: {FreqYear: curPerYear, AmountPerF: curAmount}, ScholarLink: curLink}]);
  };
  console.log(props.user);
  return (
    <>
      <UserInput onSubmit={addPost} addCard={addCard}
        cards={cardList}
        setScholar={setScholarCallBack}
        setLink={setLinkCallBack}
        setPerYear={setPerYearCallBack}
        setAmount={setAmountCallBack}
      />
      <CardList cardList={cardList} user={props.user} plan={props.plan} loc={loc}/>
    </>
  );
}