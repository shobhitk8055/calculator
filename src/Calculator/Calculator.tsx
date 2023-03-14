import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Button from "./Button/Button";

interface Props {
  changeFocus: boolean;
}

function Calculator(props: Props) {
  const { changeFocus } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [prevNum, setPrevNumber] = useState<string | null>(null);
  const [number, setNumber] = useState<string | null>(null);
  const [operation, setCurrentOperation] = useState<string | null>(null);

  //Focus on the input since it has no cursor (it should be always focused)
  const focus = () => {
    inputRef.current?.focus();
  };

  //Remove the leading zeros
  const rmZero = (num: string) => {
    const number = +num;
    return number.toString();
  };

  //To Focus
  useEffect(() => {
    if (inputRef) {
      focus();
    }
  }, [inputRef, changeFocus]);

  //Click on number from the screen
  const numberClicked = (num: number | string) => () => {
    let text = number?.toString();
    if (text && text.length > 9) {
      return;
    }
    if (!text) {
      setNumber(num.toString());
    } else {
      text = `${text}${num}`;
      setNumber(text);
    }
    focus();
  };

  //Click on backspace or from keyboard
  const backspace = () => {
    let text = number?.toString();
    if (text && text?.length > 0) {
      text = text?.substring(0, text.length - 1);
      setNumber(text);
    }
    if (!number && operation) {
      setCurrentOperation(null);
    }
    focus();
  };

  //Set a operation
  const setOperation = (op: string) => () => {
    if (number && operation && prevNum) {
      const result = calculate();
      setPrevNumber(result.toString());
      setNumber(null);
      setCurrentOperation(op);
      return;
    }
    if (number) {
      const prevNum = number;
      setNumber(null);
      setPrevNumber(prevNum);
      setCurrentOperation(op);
      if (operation !== null && prevNum !== null) {
        calculate();
      }
    } else if (prevNum) {
      setCurrentOperation(op);
    }
    focus();
  };

  //Clear everything
  const clear = () => {
    setNumber(null);
    setPrevNumber(null);
    setCurrentOperation(null);
    focus();
  };

  //Calcuation the current operation
  const calculate = (): number => {
    if (number && prevNum && operation) {
      const result = eval(`${rmZero(prevNum)}${operation}${rmZero(number)}`);
      setNumber(result);
      setCurrentOperation(null);
      setPrevNumber(null);
      return result;
    }
    focus();
    return 0;
  };

  //When user types from the keyboard
  const keyChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keycode = e.keyCode;

    //If it is a number
    if (
      e.shiftKey === false &&
      ((keycode >= 48 && keycode <= 57) ||
        (keycode >= 96 && keycode <= 105) ||
        [110, 190].includes(keycode))
    ) {
      number ? setNumber(`${number}${e.key}`) : setNumber(e.key);
    }

    // If it is a backspace
    if (keycode === 8) {
      backspace();
      return;
    }

    // If it is a plus
    if (keycode === 107 || (e.shiftKey === true && keycode === 187)) {
      setOperation("+")();
    }

    // If it is a minus
    if (keycode === 109 || keycode === 189) {
      setOperation("-")();
    }

    // If it is a multiply
    if (keycode === 106 || (e.shiftKey === true && keycode === 56)) {
      setOperation("*")();
    }

    // If it is a divide
    if ([191, 111].includes(keycode)) {
      setOperation("/")();
    }

    // If it is a enter
    if (keycode === 13 || (e.shiftKey === false && e.keyCode === 187)) {
      calculate();
    }
  };

  return (
    <div className="calculator-box shadow rounded border">
      <div className="display-area">
        <input
          type="text"
          value={number === null ? "" : number}
          onKeyDown={keyChange}
          ref={inputRef}
          className="w-100 input-field"
          readOnly
        />
        <p className="operation-test">
          {prevNum} {operation} {number}
        </p>
      </div>

      <div className="buttons-area ">
        <div className="row1 d-flex">
          <Button dropRight text="C" onClick={clear} />
          <Button
            dropRight
            text={<i className="fa-solid fa-delete-left" />}
            onClick={backspace}
          />
          <Button
            dropRight
            text={<i className="fa-solid fa-percent"></i>}
            onClick={setOperation("%")}
          />
          <Button
            orange
            text={<i className="fa-solid fa-divide"></i>}
            onClick={setOperation("/")}
          />
        </div>
        <div className="row2 d-flex">
          <Button dropRight text="7" onClick={numberClicked(7)} />
          <Button dropRight text="8" onClick={numberClicked(8)} />
          <Button dropRight text="9" onClick={numberClicked(9)} />
          <Button
            orange
            text={<i className="fa-solid fa-xmark" />}
            onClick={setOperation("*")}
          />
        </div>
        <div className="row3 d-flex">
          <Button dropRight text="4" onClick={numberClicked(4)} />
          <Button dropRight text="5" onClick={numberClicked(5)} />
          <Button dropRight text="6" onClick={numberClicked(6)} />
          <Button
            orange
            text={<i className="fa-solid fa-minus" />}
            onClick={setOperation("-")}
          />
        </div>
        <div className="row3 d-flex">
          <Button dropRight text="1" onClick={numberClicked(1)} />
          <Button dropRight text="2" onClick={numberClicked(2)} />
          <Button dropRight text="3" onClick={numberClicked(3)} />
          <Button
            orange
            text={<i className="fa-solid fa-plus"></i>}
            onClick={setOperation("+")}
          />
        </div>
        <div className="row3 d-flex">
          <Button
            onClick={numberClicked(0)}
            addBottom
            dropRight
            doubleSize
            text="0"
          />
          <Button addBottom dropRight onClick={numberClicked(".")} text="." />
          <Button
            orange
            addBottom
            onClick={calculate}
            text={<i className="fa-solid fa-equals"></i>}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
