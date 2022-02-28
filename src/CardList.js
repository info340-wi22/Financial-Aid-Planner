import React from 'react';
import Card from './Card';

export function CardList(props) {
  const {cardList} = props;
  const cards = cardList.map((card) => {
    return <Card key={`card${card.key}`} name={card.name} status={card.cardStatus} toDo={card.toDo} amount={card.amount} />;
  });
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}