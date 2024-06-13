import Home from "@/app/home/Home";
import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

test("should show login form", () => {
  render(<Home />);
  screen.getByText((content, element: any) => {
    return (
      element.tagName.toLowerCase() === "span" && content.startsWith("Testo")
    );
  });
  // Events and assertions...
});
