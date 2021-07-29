import React from 'react';
import './Cards.scss';
import Card from '../Card/Card';

const Cards: React.FC = () => {
  return (
    <div className="Cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
