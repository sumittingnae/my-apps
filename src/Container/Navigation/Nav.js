import React from 'react';
// import './navs'

import './Nav.css';

export default function Navigation (){
    

    return(
        <div  className='header'>
            <div className='logo'>
                <img src='./Logo.svg' alt='logo'/>
            </div>
            
        

            <div className='nav'>
            <a href='#about'>About</a>
            <a href='#features'>Features</a>
            <a href='#pricing'>Pricing</a>
            <a href='#testimonials'>Testimonials</a>
            <a href='#help'>Help</a>

            </div>
            <div className='sign'>
                <a href='#m'>Sign In</a>
                <a href='#s'><button className='btn '>Sign Up</button></a>

            </div>
             <div id="menu-bar"  >menu</div>
            
            </div>
            
            
            

    )
    


}