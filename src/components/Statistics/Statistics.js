import PropTypes from 'prop-types';
import Notification from 'components/Notification/Nitification';
import s from 'components/Statistics/Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  totalCounter,
  totalPercentage,
}) {
  const totalFeedback = totalCounter();
  const positivePercent = totalPercentage();

  return (
    <div>
      {totalFeedback ? (
        <ul className={s.list}>
          <li className={s.item}>
            Good: <span>{good}</span>
          </li>
          <li className={s.item}>
            Neutral: <span>{neutral}</span>
          </li>
          <li className={s.item}>
            Bad: <span>{bad}</span>
          </li>
          <li className={s.item}>
            Total: <span>{totalFeedback}</span>
          </li>
          <li className={s.item}>
            Positive Feedback: <span>{positivePercent}%</span>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalCounter: PropTypes.func.isRequired,
  totalPercentage: PropTypes.func.isRequired,
};
