import React from 'react';

import Card from './ExploreCard';

export default function CardList(props) {
  const cards = props.cardList.map((card, index) => <Card cardInfo={card} key={index} id={index} user={props.user} currentPlan={props.currentPlan}/>);
  return (
    <div className='plan-card'>
      {cards}
    </div>
  );
}