import NavBar from './NavBar';
import React, {useState} from 'react';
import {CardList} from './CardList';
import UserInput from './UserInput';

function App() {
  const [cardList, setCardList] = useState([]);
  const addPost = (costPerYear, amountCover, currentAid, potentialAid, amountLeft) => {
    const newPost = {
      yearlyCost: costPerYear,
      userCover: amountCover,
      userAid: currentAid,
      userPotential: potentialAid,
      userAmountNeed: amountLeft,
    };
  };

  const addCard = () => {
    /* WILL OF COURSE BE FROM USER INPUTS LATER ON */
    setCardList([...cardList, {key: cardList.length, name: 'Scholarship', cardStatus: 'Accepted', toDo: ['Get A Letter of Rec', 'Get A Letter of Rec', 'Get A Letter of Rec'], amount: {freq: 4, per: 3000}}]);
  };
  return (
    <div className='container'>
      <NavBar />
      <main>
        <UserInput onSumbit={addPost} addCard={addCard} />
        <div className='plan'>
          <CardList cardList={cardList}/>
        </div>
	  </main>
	</div>
  );
}

export default App;