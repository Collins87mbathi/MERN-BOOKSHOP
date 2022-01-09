import React from 'react'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './shipping.css';

const Shipping = () => {
    return (
        <div className='shipping'>
           <div className="shipping-info">
               <div className="shipping-icon">
                <MonetizationOnIcon/>
               </div>
               <div className="shipping-title">
                 <h4>Fixed Prices</h4>
               </div>
               <div className="shipping-words">
                <p>Prices fits for shopping needs and others</p>
               </div>
           </div>
           <div className="shipping-info">
               <div className="shipping-icon">
                < MoneyOffIcon />
               </div>
               <div className="shipping-title">
                 <h4>Money Back Guarantee</h4>
               </div>
               <div className="shipping-words">
                <p>Money back guarantee will be safe and loss</p>
               </div>
           </div>
           <div className="shipping-info">
               <div className="shipping-icon">
                <LocalShippingIcon/>
               </div>
               <div className="shipping-title">
                 <h4>Fast Delivery</h4>
               </div>
               <div className="shipping-words">
                <p>Delivery is very fast until the destination you request</p>
               </div>
           </div>


        </div>
    )
}

export default Shipping
