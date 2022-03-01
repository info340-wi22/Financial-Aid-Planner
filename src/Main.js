import React, {useState} from 'react';

import UserInput from './UserInput';
import {CardList} from './CardList';

export function Main() {
  const [cardList, setCardList] = useState([]);
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

  const addCard = () => {
    setCardList([...cardList, {key: cardList.length, name: curScholar, cardStatus: 'Accepted', toDo: ['Get A Letter of Rec', 'Get A Letter of Rec', 'Get A Letter of Rec'], amount: {freq: curPerYear, per: curAmount}, link: curLink}]);
  };
  return (
    <div>
      <UserInput onSubmit={addPost} addCard={addCard}
        cards={cardList}
        setScholar={setScholarCallBack}
        setLink={setLinkCallBack}
        setPerYear={setPerYearCallBack}
        setAmount={setAmountCallBack}
      />
      <CardList cardList={cardList} />
    </div>
  );
}