import { useContext, useState, Fragment } from "react";
import {
  ActionTypes,
  ApplicationContext,
} from "../../Context/ApplicationContextProvider";
import Item from "../Item/Item";
import Search from "../Search/Search";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./ItemList.css";

function ItemList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    state: { items, loading },
    dispatch,
  } = useContext(ApplicationContext);

  return (
    <div>
      <Search />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {items.length > 0 ? (
            <div>
              Year Start :{" "}
              <input
                type="date"
                value={startDate}
                placeholder="dd-mm-yyyy"
                onChange={(e) => setStartDate(e.target.value)}
              />
              Year End :{" "}
              <input
                type="date"
                value={endDate}
                placeholder="dd-mm-yyyy"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          ) : (
            <div className="searchMessage">
              Your search results will be shown here
            </div>
          )}
          <div className="container">
            {(!startDate
              ? items
              : items.filter(
                  (i) =>
                    new Date(i.data[0].date_created)
                      .toISOString()
                      .slice(0, 10) >= startDate &&
                    new Date(i.data[0].date_created)
                      .toISOString()
                      .slice(0, 10) <= endDate,
                )
            ).map((item) => (
              <Fragment key={item.href}>
                <Item
                  onClick={() =>
                    dispatch({
                      type: ActionTypes.SELECT_ITEM,
                      payload: item,
                    })
                  }
                  item={item}
                />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
