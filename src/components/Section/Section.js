import PropTypes from 'prop-types';
import s from 'components/Section/Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
