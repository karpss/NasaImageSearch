/* eslint-disable */
import { render} from "@testing-library/react";
import { mockData } from "../../../mockData";
import ItemDetails from "../ItemDetails";
import ApplicationContextProvider from "../../../Context/ApplicationContextProvider";


test("matches snapshot", () => {
    const { container } = render(
        <ApplicationContextProvider> 
    <ItemDetails {...mockData} />
    </ApplicationContextProvider>
    
    );
    expect(container.firstChild).toMatchSnapshot();
  });