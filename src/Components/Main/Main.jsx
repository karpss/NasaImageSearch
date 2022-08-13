/* eslint-disable */
import { useContext } from "react";
import { ApplicationContext } from "../../Context/ApplicationContextProvider";
import Navbar from "../Navbar/Navbar";
import ItemList from "../ItemList/ItemList";
import ItemDetails from "../ItemDetails/ItemDetails";




const Main = () => {
     const {state: {selectedItem}} = useContext(ApplicationContext);
    return (
        <div>
            <Navbar />
            {selectedItem ? <ItemDetails /> : <ItemList />}
        </div>
    )
}

export default Main;