import React, { useState } from 'react';
import axios from "axios";
import SucessComponent from '../components/SucessComponent';

const Register = () => {
  const [useUsername, setUsername] = useState("")
  const [useEmail, setEmail] = useState("")
  const [usePassword, setPassword] = useState("")
  const [useStatus, setUseStatus] = useState(false)

  const url = "http://localhost:3000/cadastro"
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const User = {
      "name":useUsername,
      "email":useEmail,
      "password":usePassword
    };

    axios.post(url, User)
    .then((response) => {
        setUseStatus(true)     
    })
    .catch(err => setUseStatus(false) )
  }
  if (useStatus) {
    return <SucessComponent />;
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                name: 
                <input type="text"  
                value={useUsername}
                name="username" 
                onChange={(e)=> {setUsername(e.target.value)}} />
            </label>
            <label>
                Email : 
                <input type="email"  
                value={useEmail}
                name="email"
                onChange={(e)=> {setEmail(e.target.value)}} />
            </label>
            <label>
                password : 
                <input type="password"  
                value={usePassword}
                name="password"
                onChange={(e)=> {setPassword(e.target.value)}} />
            </label>
            <input type="submit" value="criar"/>
        </form>

     </div>
    
   
  )
}

export default Register