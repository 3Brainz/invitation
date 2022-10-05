import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Dance from "./assets/Dance.svg";
import InvitoScema from "./assets/invito.png";
import guagliu from "./assets/guagliu.gif";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={Dance} className="logo react" alt="React logo" />
      </div>
      <h1>INVITO UFFICIALE AL WALZER</h1>
      <h1>15-16/10/2022</h1>
      <>
        {user === 0 ? (
          <div>
            <button onClick={() => setUser(1)}>
              Sono Angelica Elizabeth Salvadore
            </button>
            <br />
            <br />
            <button onClick={() => setUser(2)}>Sono un altra persona</button>
          </div>
        ) : (
          <></>
        )}
      </>
      <>
        {user === 1 ? (
          <>
            <img src={InvitoScema} className="invitoScema" alt="invitoScema" />
            <h3>Egregia Angelica Elizabeth Salvadore</h3>
            <h3>nonostante la sua vrenzolamma e scimitá</h3>
            <h3>
              é invitata allo speciale walzer che si terrá nella reggia di sua
              maestá Roberto
            </h3>
            <h2>Per Elizabeth la regina della scimitá</h2>
          </>
        ) : (
          <></>
        )}
      </>
      <>
        {user === 2 ? (
          <>
            <img src={guagliu} className="guagliu" alt="guagliu" />
            <h3>WE FRATM</h3>
            <h3>TI ASPETTO AL MIO PARTY</h3>
            <h3>AMMA FA O BURDELL, STATT ACCORT CA C STA COCC SCEM</h3>
            <h3>PUORT TUTT É CUMPAGNJ TUOIJ</h3>
            <h2>FRAAAAAATM</h2>
          </>
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default App;
