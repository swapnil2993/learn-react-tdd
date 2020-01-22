import React from "react";
import { cleanup, render } from "@testing-library/react";
import HelloWorld from "../HelloWorld";

afterEach(cleanup);

test("test hello-world", () => {
  const { getByText } = render(<HelloWorld />);

  const h1 = getByText(/Hello World/i);
  expect(h1.textContent).toBe("Hello World");
  expect(h1).toMatchSnapshot();
});
