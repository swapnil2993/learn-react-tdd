import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import HelloWorld from "../HelloWorld";

afterEach(cleanup);

test("test hello-world with no lib", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<HelloWorld />, div);
  // document comes from js-dom lib which provides browser apis
  // js-dom is used by jest. TODO internal working of jest
  // console.log(document.body.innerHTML);
  const h1 = document.body.querySelector("h1");
  expect(h1.textContent).toBe("Hello World");
});
