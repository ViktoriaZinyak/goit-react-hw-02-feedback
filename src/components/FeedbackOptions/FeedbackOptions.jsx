import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback.onPlus}>{options[0]}</button>
      <button onClick={onLeaveFeedback.onNeutral}>{options[1]}</button>
      <button onClick={onLeaveFeedback.onBad}>{options[2]}</button>
    </div>
  );
};

export default FeedbackOptions;
