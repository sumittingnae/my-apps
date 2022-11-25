import React from 'react';
import './adva.css'

export default function advantage (){

    return(

        <div className='advantage' id='features'>
            <div className='adv-img'>
                 <img src='./Illustration 2.svg' alt='Advantage'/>
             </div>
             <div className='info'>
                <h3>We Provide Many Features You Can Use</h3>
                <p>You can explore the feature that we provide with fun and have 
                    their own function each feature.
                </p>
                <ul>
                <img src='./check.svg' alt='check'/><p>Powerfull online protection</p>
                <img src='./check.svg'alt='check'/><p>Internet without border</p>
                 <img src='./check.svg'alt='check'/><p>SuperChanged VPN</p>
                 <img src='./check.svg'alt='check'/><p>No specific time limits.</p>

                </ul>



             </div>

        </div>

    )

}