import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home component", () => {
  it("should fetch and display movies on button click", async () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(movies),
    });

    render(<Home />);

    fireEvent.click(screen.getByText("Clique para fazer a busca"));

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Movie 2")).toBeInTheDocument();
    });
  });
});
