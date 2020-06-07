import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => {
  const randColor = () => {
   return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' +
    (85 + 10 * Math.random()) + '%)';
  };

  return (
    <section className={styles.statistics}>
      {title ? (
        <h2 className={styles.title}>{title}</h2>
      ) : (
        ''
      )}
      <ul className={styles.list}>
        {stats.map(stat => (
          <li style={{backgroundColor: randColor()}} className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percent}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired
};

export default Statistics;