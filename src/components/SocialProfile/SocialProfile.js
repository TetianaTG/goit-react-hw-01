import React from 'react';
import styles from './SocialProfile.module.css';
import PropTypes from 'prop-types';

const SocialProfile = ({user}) => (
  <div className={styles.profile}>
    <img className={styles.avatar} src={user.avatar} alt={user.name}/>
    <span className={styles.name}>{user.name}</span>
    <span className={styles.tag}>@{user.tag}</span>
    <span className={styles.location}>{user.location}</span>
    <ul className={styles.statsList}>
      <li className={styles.statsItem}>
        <span className={styles.statsItemName}>Followers</span>
        <span className={styles.statsItemStat}>{user.stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.statsItemName}>Views</span>
        <span className={styles.statsItemStat}>{user.stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.statsItemName}>Likes</span>
        <span className={styles.statsItemStat}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired
};

export default SocialProfile;