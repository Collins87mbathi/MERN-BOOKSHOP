import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';

const Header = () => {

    return (
       <div className='header'>
           <div className='words'>
               <div className='words-title'>
                  
               <h3 >Handmade <b>Made To Order</b></h3>
                </div>
                <div className='words-quote'>
                <p>From book materials to style options, discover which book is the best for your space</p>
                </div>
                <div className="title-button">
                <Button variant="outlined" color="secondary">
                 shop now
                </Button>
                </div>
               

           </div>
       </div>
    )
}

export default Header
