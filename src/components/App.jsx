import Profile from "./Profile/UserProfile";
import user from "../data/user.json";
import Statistics from "./Statistics/Statistics";
import data from "../data/data.json";
export const App = () => {
  return ( <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  />
 <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
  </div>
  );
};
