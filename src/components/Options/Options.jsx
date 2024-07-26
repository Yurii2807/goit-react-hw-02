import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ options, onLeaveFeedback, totalFeedback, onResetFeedback }) => (
  <div>
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
    {totalFeedback > 0 && (
      <button onClick={onResetFeedback}>Reset</button>
    )}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
};

export default Options;
