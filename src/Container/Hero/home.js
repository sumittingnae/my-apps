import React from 'react';
import './home.css'

export default function Hero (){

    return(
    <div className='hero'>
        <div className='left-side'>
            <h1>Want anything to be  easy with <span>LaslesVPN.</span></h1>
            <h4>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span>
             <br/>discover intersiting features from us.</h4>

             <div className='get-stared '>
              <a href='#'><button className='btn'> Get Started</button></a>
             </div>

        </div>
        <div className='right-side'>
          <div className='hero-image'>
            <img src='./Illustration 1.svg' alt='study'/>

          </div>

        </div>
        
    
      </div>

    )

}