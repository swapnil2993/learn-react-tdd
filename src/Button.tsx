import * as React from "react";

const Button = ({ increment, onClickFunction, ...props }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return (
    <button {...props} className="button" onClick={handleClick}>
      +{increment}
    </button>
  );
};

export default Button;
