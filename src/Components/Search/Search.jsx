/* eslint-disable */
import { useState, useContext } from "react";
import apiCallHandler from "../../Api/ApiCall";
import { ActionTypes, ApplicationContext } from "../../Context/ApplicationContextProvider";


const Search = () => {

    const [query, setQuery] = useState("");
    const { dispatch } = useContext(ApplicationContext);
  
    const onQueryChange = ({ target }) => {
      setQuery(target.value);
    };
  
    
  
    const handleFetch = (event) => {
      event.preventDefault();
      if (!query) {
        return;
      }
      apiCallHandler(
        `https://images-api.nasa.gov/search?media_type=image&q=${query}`,
        ActionTypes.FETCH_IMAGE_ITEMS,
        dispatch
      );
    };
  
    return (
      <form onSubmit={handleFetch} >
        <input value={query} label="Search images" onChange={onQueryChange}  />
        <button type="submit">Search</button>
      </form>
    );




  
}

export default Search