
import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { useGlobalContext } from '../context/context';



const Menu = ({ items }) => {
  
  const {AddCart} = useGlobalContext(); 

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='menu-image'>
            <img src={img} alt={title} className='photo' />
            <button className='img-icon'
            onClick={() => AddCart(menuItem)}>
              <AddShoppingCartIcon />
            </button>
            </div>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>shs{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;