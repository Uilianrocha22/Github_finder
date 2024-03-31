import Search from "../components/Search";
import { useState } from "react";

type UserProps = {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
};

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  async function loadUser(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

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
      {user && <p>{user.login}</p>}
    </div>
  );
}
