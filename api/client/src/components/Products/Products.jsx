import React,{useState,useEffect} from 'react'
import './Products.css';
import Menu from './Menu';
import Categories from './Categories';
import axios from 'axios';
import { baseUrl } from '../../config';


const Products = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(()=> {
   const fetchProducts = async ()=> {
     const res = await axios.get(baseUrl + "/products");
     setMenuItems(res.data);
   };
   fetchProducts();
  }, []);

  const allCategories = ['all', ...new Set(menuItems.map((item) => item.categories))];

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.categories === category);
    setMenuItems(newItems);
  };

    return (
      <main>
      <section className="menu section">
        <div className="title">
          <h2>Genres</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
    )
}

export default Products
