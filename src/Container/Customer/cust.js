import React from 'react';
import './cust.css';

export default function Customer (){

    return(
            <div className='customer'>
                <div className='head'>
                    <h3>Trusted by Thausands Of Happy Customer</h3>
                    <p>These are stories of our customers who have joined us with great 
                        pleasure when using this crazy feature. </p>
                </div>
                <div className='review'>
                    <div className='review-box'>
                        
                        <div className='name'>
                            <img src='./face2.png' alt=''/>
                            <h4>Viezh Robert</h4>
                        
                        <p >Warsaw,Poland</p>
                        </div>
                        <div className='rating'>
                            <p>4.5</p>
                        </div>
                       <div className='comment'>
                        <p>"Wow... I am very happy to use this VPN. it turned 
                        out to be more than my expectatios and so far there have no problems. LaslesVPN
                        always the best"</p>
                       </div>
                    </div>
                    <div className='review-box'>
                        
                        <div className='name'>
                            <img src='./face.png' alt=''/>
                            <h4>Viezh Robert</h4>
                        
                        <p >Warsaw,Poland</p>
                        </div>
                        <div className='rating'>
                            <p>4.5</p>
                        </div>
                       <div className='comment'>
                        <p>"Wow... I am very happy to use this VPN. it turned 
                        out to be more than my expectatios and so far there have no problems. LaslesVPN
                        always the best"</p>
                       </div>
                    </div>
                    <div className='review-box'>
                        
                        <div className='name'>
                            <img src='./face3.png' alt=''/>
                            <h4>Viezh Robert</h4>
                        
                        <p >Warsaw,Poland</p>
                        </div>
                        <div className='rating'>
                            <p>4.5</p>
                        </div>
                       <div className='comment'>
                        <p>"Wow... I am very happy to use this VPN. it turned 
                        out to be more than my expectatios and so far there have no problems. LaslesVPN
                        always the best"</p>
                       </div>
                    </div>

                </div>

            </div>
        
    )

}