import React from 'react';
import './help.css'

export default function Help (){

    return(
        <div className='contact-us'>
            <div className='left-side'>
                <img src='./logo.svg' alt='logo'/>
                <p><span>LaslesVPN</span>is a private virtual network that
                has unique features and has high security. </p>
                <div className='social'>
                    <img src='./facebook.svg' alt='face'/>
                    <img src='./Twitter.svg' alt='face'/>
                    <img src='./Instagram.svg' alt='face'/>
                </div>
                <div className='footer'>
                    <p>copywrite 2020LaslesVPN</p>

                </div>

            </div>
            <div className='right-side'>
                <div className='product'>
                  <h5>Product</h5>
                  <ul>
                    <a href=''><p>Download</p></a>
                     <a href=''> <p> Pricing</p></a>
                     <a href=''><p>Location</p></a>
                     <a href=''><p>Server</p></a>
                     <a href=''><p> Countries</p></a>
                     <a href=''><p>Blog</p></a>
                  </ul>
                  
                     
                </div>
                <div className='enguage'>
                     <h5>Engage</h5>
                  <ul>
                     <a href=''><p>LaslesVPN?</p></a>
                     <a href=''><p> FAQ</p></a>
                    <a href=''><p>Tutorials</p></a>
                    <a href=''><p>About Us</p></a>
                   <a href=''><p> Privacy Policy</p></a> 
                    <a href=''><p>Terms of Service</p></a>
                  </ul>
                   

                </div>
                <div className='earn'>
                    <h5>Earn Money</h5>
                  <ul>
                    <a href=''><p>Affiliate</p></a>
                    <a href=''><p> Become Partner</p></a> 
                   
                  </ul>

                </div>

            </div>

        </div>
        

    )

}