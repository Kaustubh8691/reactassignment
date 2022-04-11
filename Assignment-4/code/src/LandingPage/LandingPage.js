import React from 'react'
// import '../App.css';
import '../Postview.css';
import data from '../Mock-data/data.json';
import Card from '../Component/Card.js';
import Nav from '../Component/nav.js';

const LandingPage=()=> {
    const users=data.user;
  return (
    <div className='site-container'>
        <Nav/>
        <section className='section1'>
            {users.length? users.map((obj,idx)=>{
                return <Card key={idx} obj={obj}/>;
            }):""}
           
        </section>
         </div>
  )
}
export default LandingPage;