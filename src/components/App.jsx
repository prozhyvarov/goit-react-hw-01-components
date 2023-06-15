import user from './Profile/user.json';
import Profile from './Profile/Profile';

import data from './Statistic/data.json';
import Statistics from './Statistic/Statistic';

import friends from './FrendList/friends.json';
import FriendList from './FrendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
