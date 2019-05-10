import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>lynn park</h1>
      <h3>lynnpark.dev@gmail.com</h3>
      <hr />
      <p>more stuff coming soon</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
