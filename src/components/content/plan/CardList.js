import React from 'react';
import Card from './Card';

export function CardList(props) {
  const cardsData = props.cardList;
  console.log(props.currentPlan);
  const cards = cardsData.map((cards, index) => <Card id={index} schloarInfo={cards} key={cards.postNumber} user ={props.user} currentPlan={props.currentPlan}/>);
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}