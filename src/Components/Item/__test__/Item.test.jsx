//* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../Item";

test("handles thumbnail click", () => {
  const handleClick = jest.fn();
  render(<Item item={{}} onClick={handleClick} />);
  const divElement = screen.getByRole("button");
  fireEvent.click(divElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
