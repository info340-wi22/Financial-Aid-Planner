import React from 'react';
import Card from './Card';

export function CardList(props) {
  const {cardList} = props;
  const cards = cardList.map((card) => {
    const key = 'card' + card.key;
    return <Card key={key} name={card.name} status={card.cardStatus} toDo={card.toDo} amount={card.amount} link={card.link}/>;
  });
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}