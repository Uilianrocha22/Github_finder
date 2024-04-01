import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import { useState } from "react";

export type UserProps = {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
};

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  async function loadUser(userName: string) {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  }
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && (
        <User
          avatar_url={user.avatar_url}
          followers={user.followers}
          following={user.following}
          location={user.location}
          login={user.login}
          // Ou Fazer um spread no state user{...user}
        />
      )}
      {error && <Error />}
    </div>
  );
}
