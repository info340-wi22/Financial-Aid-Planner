import React from 'react';
import {PlanCard} from './PlanCard';
export function PlanCardList(props) {
  const cards = props.cardList.map((card, index) => <PlanCard cardInfo={card} key={index} id={index} user={props.user} />);
  return (
    <div className='plan-card'>
      {cards}
    </div>
  );
}