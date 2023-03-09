import React from "react";
import Button from "./Button/Button";

interface Props {}

function Calculator(props: Props) {
  const {} = props;

  return (
    <div className="calculator-box shadow rounded border">
      <div className="display-area">
        <p dir="rtl" className="mb-0">00</p>
      </div>
      <div className="buttons-area ">
        <div className="row1 d-flex">
          <Button dropRight text="C" />
          <Button dropRight text="C" />
          <Button dropRight text="%" />
          <Button text="/" />
        </div>
        <div className="row2 d-flex">
          <Button dropRight text="7" />
          <Button dropRight text="8" />
          <Button dropRight text="9" />
          <Button text="X" />
        </div>
        <div className="row3 d-flex">
          <Button dropRight text="4" />
          <Button dropRight text="5" />
          <Button dropRight text="6" />
          <Button text="-" />
        </div>
        <div className="row3 d-flex">
          <Button dropRight text="1" />
          <Button dropRight text="2" />
          <Button dropRight text="3" />
          <Button text="+" />
        </div>
        <div className="row3 d-flex">
          <Button addBottom dropRight doubleSize text="0" />
          <Button addBottom dropRight text="." />
          <Button addBottom text="=" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
