import { Outlet } from "react-router-dom";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={style.app}>
        <h1>Github Finder</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
