/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import Search from "../Search";

const mockedSearch = jest.fn();

describe("Search", () => {

    it('should be able to type into inputb', () => {
        render(
            <Search 
                queries={[]}
                setQueries={mockedSearch}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Search like... Mars, Apollo/i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Mars" } });
        const buttonElement = screen.getByRole("button", { name: /Search/i});
        fireEvent.click(buttonElement)
        expect(mockedSearch).toBeCalled()
    });


})