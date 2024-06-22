// import Home from "@/app/home/Home";
// import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

// test("should show login form", () => {
//   render(<Home />);
//   screen.getByText((content, element: any) => {
//     return (
//       element.tagName.toLowerCase() === "span" && content.startsWith("Testo")
//     );
//   });
// });

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import Home from "@/app/home/Home";

test("should show login form", () => {
  render(<Home />);

  // Assert that the "Testo" span is rendered
  expect(screen.getByText("Testo")).toBeInTheDocument();

  // Assert that the initial price is rendered as 0
  expect(screen.getByText("0")).toBeInTheDocument();

  // Simulate user input and blur event
  const input = screen.getByRole("spinbutton");
  fireEvent.change(input, { target: { value: "100" } });
  fireEvent.blur(input);

  // Assert that the price is updated after input blur
  expect(screen.getByText("100")).toBeInTheDocument();

  // Simulate click event on the discount button
  const button = screen.getByTestId("applyDiscountButtonHomePage");
  fireEvent.click(button);

  // Assert that the price is updated after applying discount
  expect(screen.getByText("90")).toBeInTheDocument();
});
