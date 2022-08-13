/* eslint-disable */
export default function apiCallHandler(
    url,
    actionType,
    dispatch
  ) {
    dispatch({ type: actionType });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionType + "_FULFILLED",
          payload: data.collection.items.filter((i) => !!i.links)
        });
      })
      .catch((error) => {
        dispatch({ type: actionType + "_REJECTED", payload: error });
      });
    }