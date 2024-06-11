import { render } from "@testing-library/react";
import "./@testing-library/jest-dom";

test("renders a message", () => {
  const { asFragment, getByText } = render(<div>Hello, world!</div>);
  expect(getByText("Hello, world!").textContent).toBe("Hello, world!");
  expect(asFragment()).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `);
});
