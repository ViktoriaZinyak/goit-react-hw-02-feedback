import React from 'react';
import PropTypes from 'prop-types';
import { Wrap } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrap>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </Wrap>
  );
};

export default Statistics;

Statistics.ptopTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
