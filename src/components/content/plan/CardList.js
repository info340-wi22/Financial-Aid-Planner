import React from 'react';
import Card from './Card';

export function CardList(props) {
  const cardsData = props.cardList;
  console.log(cardsData);
  const cards = cardsData.map((cards) => <Card id={1} schloarInfo={cards} key={cards.postNumber}/>);
  return (
    <div className='plan'>
      {cards}
    </div>
  );
}