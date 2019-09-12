import React from 'react';
import './CardItem.css';
import theme from '../../../../config/theme';

interface Props {
  label: string;
  value: string;
  extraLines?: string[];
  inline?: boolean;
}

const CardItem: React.FC<Props> = props => {
  return (
    <div className={`CardItem ${props.inline ? 'inline' : ''}`}>
      <div className="card-item-inner">
        <label
          htmlFor="card-item-value"
          className="card-item-label"
          style={{ color: theme.accentColor }}
        >
          {props.label}
        </label>
        <span id="card-item-value" className="card-item-value">
          {props.value}
        </span>
      </div>
      {props.extraLines &&
        props.extraLines.map(extraVal => {
          return (
            <span key={extraVal} className="card-item-extra-value">
              {extraVal}
            </span>
          );
        })}
    </div>
  );
};

export default React.memo(CardItem);
