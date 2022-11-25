import React from 'react';
import './user.css'

export default function UserLoc (){

    return(

      <div className='ULS-info'>
        <div className='user'>
            <img src='./user.svg' alt='user'/>
            <h4>90+</h4>
            <h5>Users</h5>

        </div>
       
        <div className='location'>
            <img src='./location.svg' alt='user'/>
            <h4>30+</h4>
            <h5>Location</h5>

        </div>
         <div className='server'>
            <img src='./server.svg' alt='user'/>
            <h4>50+</h4>
            <h5>Server</h5>

        </div>
       
      </div>

    )

}