import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import './Footer.css';

const Footer = () => {

    const date  = new Date().getFullYear();
    return (
        <div  className='Footer'>
           <div className="footer-info">
               <h4 className='footer-title'><b>Perez BookShop</b></h4>
               <p className='footer-para'>Perez bookshop we make the feeling a reality</p>
               <div className="icons">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
               </div>
           </div>
           
           <div className="footer-info">
               <h4 className='footer-title'>Get in touch</h4>
               <p className='footer-para'>
               < EmailIcon /> perezcollins@gmail.com
               < CallIcon/> +254791686851
               </p>
              
           </div>
            
           <div className="footer-info">
            <h4 className='footer-title'>Newsletter</h4>

            <div className="newsletter">
            <input type='email' className='input' placeholder='email'/>
            <i class="fas fa-envelope"></i>
		    <div className="btn">Subscribe</div> 
            </div>  
         

          <div className="reserved">
              <span> &#169; {date} <b> Perez Bookshop. All rights and reserved</b></span>
          </div>
              
           </div>
        </div>
    )
}

export default Footer
