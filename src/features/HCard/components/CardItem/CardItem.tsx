import React from 'react';
import './CardItem.css';

interface Props {
  label: string;
  value: string;
}

const CardItem: React.FC<Props> = props => {
  return (
    <div className="CardItem">
      <label htmlFor="card-item-value">{props.label}</label>
      <span id="card-item-value">props.value</span>
    </div>
  );
};

export default React.memo(CardItem);
