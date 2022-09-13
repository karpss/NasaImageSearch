/* eslint-disable */
import { render, screen, fireEvent } from "@testing-library/react";
import { mockData } from "../../../mockData";
import Item from "../Item";

test("handles thumbnail click", () => {
  const onClick = jest.fn();
  render(<Item item={mockData} onClick={onClick} />);
  const divElement = screen.getByRole("button");
  fireEvent.click(divElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
