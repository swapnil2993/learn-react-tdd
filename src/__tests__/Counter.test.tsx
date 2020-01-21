import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../Counter";

afterEach(cleanup);

test("test counter", () => {
  const { getByText } = render(<Counter />);
  const btn1 = getByText("+1");
  const btn5 = getByText("+5");
  const resultDiv = getByText(/Count Value is/);

  expect(resultDiv.textContent).toBe("Count Value is 0");
  fireEvent.click(btn1);
  expect(resultDiv.textContent).toBe("Count Value is 1");
  fireEvent.click(btn5);
  expect(resultDiv.textContent).toBe("Count Value is 6");
});
