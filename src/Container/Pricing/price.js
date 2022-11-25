import React from 'react';
import './price.css'


export default function Pricing (){

    return(

       <div className='heading' id='pricing'>
        <div className='head'>
            <h4>Choose Your Plan</h4>
        <p>Let's choose the that is best for you and explore it happily and cheerfully.</p>
        </div>
        <div className='menu-box'>
            <div className='box-1'>
            <img src='./free.svg' alt='free'/>
            <h4>Free Plan</h4>
         <ul>
            <p>Unlimited Bandwidth</p>
            <p>Encrypted Connection</p>
            <p>No Traffic Logs </p>
            <p>Work on All Devices</p>
         </ul>
         <div className='footer'>
            <p>Free</p>
         <button className='btn'>Select</button>
         </div>

            </div>

             <div className='box-2'>
            <img src='./free.svg' alt='free'/>
            <h4>Free Plan</h4>
         <ul>
            <p>Unlimited Bandwidth</p>
            <p>Encrypted Connection</p>
            <p>No Traffic Logs </p>
            <p>Work on All Devices</p>
         </ul>
         <div className='footer'>
            <p>Free</p>
         <button className='btn'>Select</button>
         </div>
         
            
            </div>
             <div className='box-2'>
            <img src='./free.svg' alt='free'/>
            <h4>Free Plan</h4>
         <ul>
            <p>Unlimited Bandwidth</p>
            <p>Encrypted Connection</p>
            <p>No Traffic Logs </p>
            <p>Work on All Devices</p>
         </ul>
         <div className='footer'>
            <p>Free</p>
         <button className='btn'>Select</button>
         </div>
         
            
            </div>
        </div>

       </div>
       

      
       
    )

}