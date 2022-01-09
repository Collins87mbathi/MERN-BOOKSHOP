import React from 'react'
import './App.css';
import { BrowserRouter , Routes,Route,Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useGlobalContext } from './components/context/context';

const App = () => {
const {user} = useGlobalContext();
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route index element={<Home/>}></Route>
   <Route path='signup'element={!user ? <Signup/> : <Redirect to="/" />}></Route>
   <Route path='login' element={!user ? <Login/> : <Redirect to="/" />}></Route>
   <Route path='cart' element={user ? <Cart/> :  <Redirect to="/signup"/>}></Route>
   </Routes>
    </BrowserRouter>
  )
}

export default App
