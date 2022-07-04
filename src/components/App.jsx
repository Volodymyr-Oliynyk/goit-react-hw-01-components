import Profile from './Profile/UserProfile';
import user from '../data/user';
import Statistics from './Statistics/Statistics';
import data from '../data/data';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
        </div>
  );
};
