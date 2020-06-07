import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({friend}) => {
  const isOnlineClass = friend.isOnline ? styles.isOnline : styles.isOffline;

  return (
    <li className={styles.item}>
      <span className={isOnlineClass}>{friend.isOnline}</span>
      <img className={styles.avatar} src={friend.avatar} alt={friend.name}/>
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
} ;

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};

export default FriendListItem;