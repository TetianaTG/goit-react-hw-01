import React from 'react';
import FriendList from "./components/FriendList/FriendList";
import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './data/friends';
import user from './data/user';
import statistic from './data/statistic';
import transactions from './data/transactions';

const App = () => (
  <>
    <FriendList friends={friends} />
    <SocialProfile user={user}/>
    <Statistics stats={statistic} title={'Upload stats'}/>
    <TransactionHistory transactions={transactions}/>
  </>
);

export default App;