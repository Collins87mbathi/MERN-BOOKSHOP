import React, {  useRef } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../config';
import axios from 'axios';
import { useGlobalContext } from '../context/context';
import { useState } from 'react';




const Login = () => {
 const userRef = useRef();
 const passwordRef = useRef();
 const [isFetching, setIsFetching] = useState(false);
 const {UserSaved} = useGlobalContext();

  const handleSubmit = async (e) =>{
   e.preventDefault();
   try {
     setIsFetching(true);
    const res = await axios.post(baseUrl + "/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    }) 
    setIsFetching(false);
     UserSaved(res.data);
   } catch (err) {
    console.log('not logged in');
   }
  }
    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit} > 
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter your username..." 
          ref={userRef}
          />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." 
          ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}><Link className="link" to="/Login">{isFetching ?  'waiting...' : 'login' }</Link></button>
        </form>
          <button className="loginRegisterButton"><Link className="link" to="/Register">Register</Link></button>
      </div>
    )
}

export default Login
