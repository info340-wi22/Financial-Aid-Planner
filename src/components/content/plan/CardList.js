import React from 'react';
import Card from './Card';

export function CardList(props) {
  const cardsList = props.cardList;
  const cards = cardsList.map((cards, index) => <Card id={index} schloarInfo={cards} key={index} user ={props.user} currentPlan={props.currentPlan}/>);
  // console.log(cardsList);
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}