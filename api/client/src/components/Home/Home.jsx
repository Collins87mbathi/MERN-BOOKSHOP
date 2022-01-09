import React from 'react'
import './Home.css';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Shipping from '../Shipping/Shipping';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header/>
            <Shipping/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home
