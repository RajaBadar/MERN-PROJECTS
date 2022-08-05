import React ,{useContext}from 'react'
import AlertContext from "../../context/alert/alertContext";

 function Alert() {
  const alertContext = useContext(AlertContext);

  const {alert} = alertContext;
    return (
    alert !== null && (
        <div className= {`alert alert-${alert.type}`}>
            <i className="fa fa-exclamation-circle" />{alert.msg}
        </div>
    )
  )
}
export default Alert;