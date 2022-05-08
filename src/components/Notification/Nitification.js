import PropTypes from 'prop-types';
import s from 'components/Notification/Nitification.module.css';

export default function Notification({ message }) {
  return <p className={s.text}>{message}</p>;
}

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
