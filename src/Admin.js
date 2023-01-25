import React from 'react'

function Admin() {

    const [data , setData] = React.useState([{
        name: "rohan",
        mobile: "7896543212",
        email: "r@gmail.com",
        options: "All Constructions",
        message:"i need a paining service"
      },{
        name: "Reheman",
        mobile: "1234567890",
        email: "xyz@gmail.com",
        options: "Under Constructions",
        message:"test i need painter"
      }
    ]);

  return (
    <div className='my-20'>
        <div className='flex justify-center text-2xl font-bold'>
      Well come to admin dashboard
    </div>
     </div>
  )
}

export default Admin
