import React from 'react';
import Card from './Card';

export function CardList(props) {
  const {cardList} = props;
  const cards = cardList.map((card) => {
    const key = 'card' + card.key;
    return <div key={key}><Card name={card.name} status={card.cardStatus} toDo={card.toDo} amount={card.amount} link={card.link}/></div>;
  });
  return (<div className='card-list'>
    {cards}
  </div>);
}