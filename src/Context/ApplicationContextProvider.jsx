/* eslint-disable */
import  {createContext, useReducer } from "react";

export const ApplicationContext = createContext({});

export const ActionTypes = {
  FETCH_IMAGE_ITEMS : "FETCH_ITEMS",
  FETCH_IMAGE_ITEMS_FULFILLED : "FETCH_ITEMS_FULFILLED",
  FETCH_IMAGE_ITEMS_REJECTED : "FETCH_ITEMS_REJECTED",
  SELECT_ITEM : "SELECT_ITEM"
}


const INITIAL_STATE = {
  items: [],
  selectedItem: null,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.FETCH_IMAGE_ITEMS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_IMAGE_ITEMS_FULFILLED:
      return { ...state, items: action.payload, loading: false };
    case ActionTypes.SELECT_ITEM:
      return { ...state, selectedItem: action.payload };
    case ActionTypes.FETCH_IMAGE_ITEMS_REJECTED:
      return { ...state, loading: false, error: "action.payload" };
      default:
        return state;
      
  }
  
  
  
};


const ApplicationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
