import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("should render same text in the header", () => {
    render(<Navbar />);
    const h1Element = screen.getByText(/NASA IMAGE SEARCH/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text in the header tag", () => {
    render(<Navbar />);
    const h1Elements = screen.getAllByText(/NASA IMAGE SEARCH/i);
    expect(h1Elements.length).toBe(1);
  });

  it("should render heading text", () => {
    render(<Navbar />);
    const headingElements = screen.getByRole("heading");
    expect(headingElements).toBeInTheDocument();
  });
});
