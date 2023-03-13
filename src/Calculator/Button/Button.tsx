import React from "react";
import clsx from "clsx";

interface Props {
  text: string | React.ReactElement;
  doubleSize?: boolean;
  dropRight?: boolean;
  addBottom?: boolean;
  orange?: boolean;
  onClick?: () => void;
}

function Button(props: Props) {
  const {
    text,
    doubleSize,
    dropRight,
    addBottom,
    orange,
    onClick
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
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
