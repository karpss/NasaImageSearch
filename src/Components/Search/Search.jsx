import { useState, useContext } from "react";
import apiCallHandler from "../../Api/ApiCall";
import {
  ActionTypes,
  ApplicationContext,
} from "../../Context/ApplicationContextProvider";
import "./Search.css";

function Search() {
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
      dispatch,
    );
  };

  return (
    <form onSubmit={handleFetch}>
      <input
        className="formInput"
        value={query}
        placeholder="Enter Search like... Mars, Apollo"
        label="Search images"
        onChange={onQueryChange}
      />
      <button className="formButton" disabled={!query} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
