import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";
import style from "./Search.module.scss";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

export default function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className={style.search}>
      <h2>Busque por um usúario:</h2>
      <p>Conheça seus melhores repositórios:</p>
      <div className={style.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do uruário:"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}
