import * as React from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
  };

  return (
    <React.Fragment>
      <div id="count">{`Count Value is ${count}`}</div>
      <Button id="btn1" increment={1} onClickFunction={incrementCount} />
      <Button id="btn5" increment={5} onClickFunction={incrementCount} />
    </React.Fragment>
  );
};

export default Counter;
