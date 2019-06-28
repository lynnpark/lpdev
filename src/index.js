import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { OneLetterByOne } from "./stuff";

function App() {
  return (
    <div className="App">
      <h1>lynn park</h1>
      <h3>lynnpark.dev@gmail.com</h3>
      <hr />
      <p>
        <OneLetterByOne title="i fear that this page will be under construction forever..." />
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
