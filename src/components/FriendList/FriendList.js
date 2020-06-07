import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  friends.length > 0 ? (
    <ul className={styles.list}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id}/>
      ))}
    </ul>
  ) : (
    <p>No friends :(</p>
  )
);

FriendList.defaultProps = {
  friends: [],
};

export default FriendList;