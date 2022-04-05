import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import CustomerInfo from './Component/CustomerInfo';
import Header from './Component/Header';
import OrderInfo from './Component/OrderInfo';
import ProductList from './Component/ProductList';

const User = {
  Name : 'Alan Ford',
  EmployeeId : '00005152',
  Appointment : '9:00 (24-05-2016)',
  Email : 'alan.form@email.nl',
  phone : '+31123456789',
  Status : 'In Process',
  Door : 'Mark',
  time : '10:25 (05-04-2022)',
  name: 'Boltaart Bosebessen',
  profileImg:'https://www.w3schools.com/howto/img_avatar.png',
  product_name: "Boltart Bosbessen",
  product_description:
    "This is some random description about the product mentioned above"
}

function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <Header object={User}/>
    <CustomerInfo object={User}/>
    <OrderInfo object={User}/>
    <ProductList object={User}/>
    
    {/* <div className='header'>
      <p id='header-para'>{arrow}</p>
      <div className='header-mid'>
      <h3>{User.Name}</h3>
      <p style={{color:'silver'}}>{User.EmployeeId}</p>
      </div>
      <button>Print</button>
    </div>
    <div className='customer-info'>
      <h3><span>Appointment:</span> <span className='emploee_data'>{User.Appointment}</span></h3>
      <h3><span>Email:</span> <span className='emploee_data'>{User.Email}</span></h3>
      <h3><span>phone:</span> <span className='emploee_data'>{User.phone}</span></h3>

      
    </div>
    <div className='order-info'>
      <div>
        <h3>Status</h3>
       
        <li>In Progress</li>
      </div>
      <div id='order1'>
        <h3>Door</h3>
        <p className='order-para'>Mark</p>
      </div>
      <div className='order-time'>
        <h3>Time</h3>
        <p id='time1'>10:30 (25-05-2016)</p>
      </div>
    </div>
    <div className='product-list'>
      <div className='checkbox'>
          <input type={'checkbox'}></input>
      </div>
      <div>
        <img src={User.profileImg}></img>
      </div>
      <div className='name'>
        <h3>{User.product_name}</h3>
        <p>{User.product_description}</p>
      </div>
      <div className='arr'><p>{arrow}</p></div>
    </div> */}
  </div>
  );
}

export default App;
