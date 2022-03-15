import React from 'react';
import Card from './Card';

export function CardList(props) {
  const cards = props.cards.map((cards, index) => <Card id={index} ScholarInfo={cards} key={index} user ={props.user} currentPlan={props.plan}/>);
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}