import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Hello from "./hello";

function App() {
  return (
    <div className="App">
      <Hello name="hamid">is dhakkan</Hello>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
