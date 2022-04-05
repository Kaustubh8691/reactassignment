import React from 'react'

function Data() {
    const Data = {
        Name : 'Alan Ford',
        EmployeeId : '00005152',
        Appointment : '9:00 (24-05-2016)',
        Email : 'alan.form@email.nl',
        phone : '+31123456789',
        profileImg:'https://www.w3schools.com/howto/img_avatar.png',
        product_name: "Boltart Bosbessen",
        product_description:
          "This is some random description about the product mentioned above"
      }
  return (
    <>{Data}</>
  )
}

export default Data;