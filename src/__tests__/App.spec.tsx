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

  expect(screen.getByText("Testo")).toBeInTheDocument();

  expect(screen.getByText("0")).toBeInTheDocument();

  const input = screen.getByRole("spinbutton");
  fireEvent.change(input, { target: { value: "100" } });
  fireEvent.blur(input);

  expect(screen.getByText("100")).toBeInTheDocument();

  const button = screen.getByTestId("applyDiscountButtonHomePage");
  fireEvent.click(button);

  expect(screen.getByText("90")).toBeInTheDocument();
});
