import React from 'react';
import { Button } from './FeedbackOptopns.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <Button onClick={onLeaveFeedback.onPlus}>{options[0]}</Button>
      <Button onClick={onLeaveFeedback.onNeutral}>{options[1]}</Button>
      <Button onClick={onLeaveFeedback.onBad}>{options[2]}</Button>
    </div>
  );
};

export default FeedbackOptions;
