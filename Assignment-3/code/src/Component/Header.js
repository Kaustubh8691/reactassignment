import React from 'react'

function Header(props) {
  const {object}=props;
    var arrow="<";
  return (
    <div className='Header'>
        <div className='back'>{arrow}</div>
        <div className='employee'>
          <div className='header_detail'>{object.Name}</div>
        <div className='id'>{object.EmployeeId}</div>
        </div>
        
        <button>print</button>
    </div>
  )
}

export default Header; 