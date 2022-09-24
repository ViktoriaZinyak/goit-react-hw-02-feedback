import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  total = good + bad + neutral;
  positivePercentage = (good * 100) / total;
  return (
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>Total: {total} </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
