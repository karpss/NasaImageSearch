/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import Search from "../Search";


describe("Search", () => {


    it('will be disabled if there is no input', () => {
        const onClick = jest.fn();
        render(
            <Search />
        );
        const buttonElement = screen.getByText('Search');
        fireEvent.click(buttonElement);
        expect(onClick).not.toHaveBeenCalled();
      });

      it('should render input element', async () => {
        render(
            <Search />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Search like... Mars, Apollo/i);
        expect (inputElement).toBeInTheDocument();
      });

      it('should be able to type into input', () => {
        render(
            <Search />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Search like... Mars, Apollo/i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Mars" } })
        expect(inputElement.value).toBe("Mars");
    });

    it("should enable login button when search input is filled with value", () => {
    render(<Search  />);
      
        const searchValue = screen.getByPlaceholderText("Enter Search like... Mars, Apollo");
        fireEvent.change(searchValue, { target: { value: "mars" } });
        expect(searchValue).toHaveValue("mars");
        expect(screen.getByRole("button", { name: /Search/i })).toBeEnabled();
      });
    


})