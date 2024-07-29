import React from 'react';
import PropTypes from 'prop-types';
import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className={css.list}>
    <p className={css.item}>Good: {feedback.good}</p>
    <p className={css.item}>Neutral: {feedback.neutral}</p>
    <p className={css.item}>Bad: {feedback.bad}</p>
    <p className={css.item}>Total: {totalFeedback}</p>
    <p className={css.item}>Positive feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Feedback;
