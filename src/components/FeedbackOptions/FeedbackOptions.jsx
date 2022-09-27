import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptopns.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            key={options.indexOf(option)}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
