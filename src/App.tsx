import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Invitation from "./invitation";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => window.open("./invitation")}>
          Sono Angelica Elizabeth Salvadore
        </button>
        <br />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          Sono un altra persona
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <>{user === 1 ? <>caio</> : <>sempr</>}</>
    </div>
  );
}

export default App;
