import React from "react";
// function CustomerInfo(()=>{
//     return <div className="customer">customer id: </div> ;
// };)
function CustomerInfo(props) {
    const {object}=props;
    return (
        <div className="customer"><div className="CustomerInfo">
        <span className="employeedata">Appointment :  </span>
        <span>{object.Appointment}</span>
    </div>

<div className="CustomerInfo">
<span className="employeedata">Email : </span>
    <span >{object.Email}</span></div>
<div className="CustomerInfo">
<span className="employeedata">Phone : </span>
    <span >{object.phone}</span>
    </div>
    </div>
            
       
    );
  }
  export default CustomerInfo;