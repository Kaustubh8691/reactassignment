import React from 'react'
import Data from './Data';
function Header(Data) {
    var arrow="<";
  return (
    <div className='Header'>
        <div className='back'>{arrow}</div>
        <div className='header_detail'>{Data.Name}</div>
    </div>
  )
}

export default Header;