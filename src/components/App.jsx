import Profile from './Profile/UserProfile';
import user from '../data/user';
import Statistics from './Statistics/Statistics';
import data from '../data/data';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';
import { Section } from './common/Section';
import { Body } from './common/Body';

export const App = () => {
  return (
    <Body>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </Body>
  );
};
