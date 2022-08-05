import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT , REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  
//this function is called from the search component to raise an alert for empty text field
const setAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: {msg , type}
    })

 //remove the alert msg after 5s
 setTimeout(() => dispatch({type: REMOVE_ALERT}), 4000);
};

  return (
    <AlertContext.Provider
      value={{
       alert: state,
       setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
