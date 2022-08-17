/* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import { mockData } from "../../../mockData";
import Item from "../Item";

test("handles thumbnail click", () => {
  const handleClick = jest.fn();
  render(<Item item={mockData} onClick={handleClick} />);
  const divElement = screen.getByRole("button");
  fireEvent.click(divElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
