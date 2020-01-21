import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import Counter from "../Counter";

afterEach(cleanup);

test("test counter with no lib", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(<Counter />, div);

  const btn1 = document.getElementById("btn1");
  const btn5 = document.getElementById("btn5");
  const resultDiv = document.getElementById("count");

  expect(resultDiv.textContent).toBe("Count Value is 0");
  btn1.click();
  expect(resultDiv.textContent).toBe("Count Value is 1");
  btn5.click();
  // btn5.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  expect(resultDiv.textContent).toBe("Count Value is 6");

  // Clean-up after each test
});
