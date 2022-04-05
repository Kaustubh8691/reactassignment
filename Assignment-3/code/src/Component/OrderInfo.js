function OrderInfo(props) {
    const {object}=props
    return (
      <div className="Order">
        
       <div className="status"><h3><div >status</div></h3>
        <div className="oredr-status"><span className="dot"></span>{object.Status}</div>
        </div>
        <div className="door">
          <h3><div>Door</div></h3>
          <div className="order_door">{object.Door}</div>

        </div>
        <div className="time">
         <h3> <div >Time</div></h3>
          <div className="order_time">{object.time}</div>
        </div>

      </div>
    );
  }
  export default OrderInfo; 