import React from 'react';
import Card from './Card';

export function CardList(props) {
  const cards = props.cardList.map((card) => {
    const key = 'card' + card.key;
    return <div key={key}><Card name={card.name} status={card.cardStatus} toDo={card.toDo} amount={card.amount}/></div>;
  });
  return (<div className='card-list'>
    {cards}
  </div>);
}