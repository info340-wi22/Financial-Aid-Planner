import NavBar from './NavBar';
import React from 'react';
import {CardList} from './CardList';
import UserInput from './UserInput';

function App() {
  const addPost = (costPerYear, amountCover, currentAid,
      potentialAid, amountLeft) => {
    const newPost = {
      yearlyCost: costPerYear,
      userCover: amountCover,
      userAid: currentAid,
      userPotential: potentialAid,
      userAmountNeed: amountLeft,
    };
    console.log(newPost);
  };
  return (
    <div className='container'>
      <NavBar />
      <main>
        <UserInput onSumbit={addPost} />
        <div className='plan'>
          <CardList />
        </div>
      </main>
    </div>
  );
}

export default App;