import React, { useState } from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl} from '../../config';

const Signup = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);
  const [isFetching , setIsFetching] = useState(false);
  
  

const handleSubmit = async (e) =>{

e.preventDefault();
setError(false);
try {
  isFetching(true);
  const res = await axios.post(baseUrl + "/auth/register", {
    username,
    email,
    password,
  });
  setIsFetching(false);
  res.data && window.location.replace("/login");

} catch (error) {
  setError(true);
}


}

    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit} >
          <label>Username</label>
          <input className="registerInput" type="text" placeholder="Enter your username..."
           onChange={(e)=>{setUsername(e.target.value)}}
          />
          <label>Email</label>
          <input className="registerInput" type="text" placeholder="Enter your email..."
           onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter your password..." 
             onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button className="registerButton" type="submit" disabled={isFetching}><Link className="link" to="/Register">
            {isFetching ? 'loading...' :'Register'}
            </Link></button>
        </form>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong</span>} 
          <button className="registerLoginButton"><Link className="link" to="/Login">Login</Link></button>
      
      </div>
    )
}

export default Signup