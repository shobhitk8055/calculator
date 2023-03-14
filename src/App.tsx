import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./Calculator/Calculator";

function App() {
  const [changeFocus, setFocus] = useState(false);

  return (
    <div className="container" onClick={() => setFocus((i) => !i)}>
      <div className="row">
        <div className="col-12 col-sm-4 mx-auto mt-4">
          <Calculator changeFocus={changeFocus} />
        </div>
      </div>
    </div>
  );
}

export default App;
