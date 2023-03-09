import React from "react";
import clsx from "clsx";

interface Props {
  text: string;
  doubleSize?: boolean;
  dropRight?: boolean;
  addBottom?: boolean;
}

function Button(props: Props) {
  const { text, doubleSize = false, dropRight = false, addBottom = false } = props;

  return (
    <div
      className={clsx(
        "button",
        doubleSize ? "button-2x" : "",
        dropRight ? "drop-right" : "",
        addBottom ? "add-bottom" : "",
      )}
    >
      {text}
    </div>
  );
}

export default Button;
