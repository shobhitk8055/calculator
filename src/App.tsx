import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 mx-auto mt-4">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
