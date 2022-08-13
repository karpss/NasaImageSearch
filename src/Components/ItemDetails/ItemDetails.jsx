/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import { ActionTypes, ApplicationContext } from "../../Context/ApplicationContextProvider";



const ItemDetails = () => {
    const [itemMedia, setItemMedia] = useState({
        images: []
        
    });

    const {
        state: { selectedItem },
        dispatch
    } = useContext(ApplicationContext);

    useEffect(() => {
        if (selectedItem) {
            fetch(
                `https://images-api.nasa.gov/asset/${selectedItem?.data[0].nasa_id}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setItemMedia({
                        images: data.collection.items.filter((i) =>
                            i.href.endsWith(".jpg")
                        )
                    });
                })
                .catch((error) => {
                    alert("Error fetching media.");
                    console.log(error);
                });
        }
    }, [selectedItem, dispatch]);

    

    return (
        <div
            
        >
            <div>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({ type: ActionTypes.SELECT_ITEM, payload: null });
                    }}
                >
                    Back to search
          </button>
            </div>
            <div >
                {
                 (
                    <img
                        
                        src={itemMedia?.images[0]?.href}
                        alt="nasa media"
                    />
                )}
            </div>
            <div>
                <h2> Title: {selectedItem?.data[0].title}</h2>
                <b> Date: {new Date(selectedItem?.data[0].date_created).toString()} </b>
                <b> Date: {new Date(selectedItem?.data[0].date_created).toISOString().slice(0, 10)} </b>
                <p>Center: {selectedItem?.data[0].center}</p>
                <p> Description: {selectedItem?.data[0].description}</p>
                <p>Location: {selectedItem?.data[0].location}</p>
                <p>Photographer: {selectedItem?.data[0].photographer}</p>
                <p>Keywords: {selectedItem?.data[0].keywords.join(', ')}</p>
            </div>
        </div>
    );
}
 
export default ItemDetails;