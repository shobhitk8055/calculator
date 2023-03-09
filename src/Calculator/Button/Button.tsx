import React from "react";
import clsx from "clsx";

interface Props {
  text: string;
  doubleSize?: boolean;
  dropRight?: boolean;
  addBottom?: boolean;
  orange?: boolean;
}

function Button(props: Props) {
  const {
    text,
    doubleSize,
    dropRight,
    addBottom,
    orange,
  } = props;

  return (
    <div
      className={clsx(
        "button",
        doubleSize ? "button-2x" : "",
        dropRight ? "drop-right" : "",
        addBottom ? "add-bottom" : "",
        orange ? "bg-orange" : ""
      )}
    >
      {text}
    </div>
  );
}

export default Button;
