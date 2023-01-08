import React, { useState } from 'react';
import axios from "axios";
import SucessComponent from '../components/SucessComponent';
import FailedComponent from '../components/FailedComponent';

const Login = () => {
    const [useEmail, setEmail] = useState("")
    const [usePassword, setPassword] = useState("")
    const [useStatus, setUseStatus] = useState(null)

    const url = "http://localhost:3000/login"

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const User = {
          "email":useEmail,
          "password":usePassword
        };
    
        axios.post(url, User)
        .then((response) => {
            
            localStorage.setItem("tokenUser", response.data.tokenUser);
            localStorage.setItem("dataUser",JSON.stringify(response.data.dataUser[0]))
            setUseStatus("enviado")     
        })
        .catch(err => setUseStatus("falha no envio") )
      }
    if (useStatus == "enviado") {
    return <SucessComponent />;
    }
    if(useStatus == "falha no envio"){
    return <FailedComponent></FailedComponent>
    }
    if(useStatus == null){
        return (
            <div>
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Logar"/>
                </form>
            </div>
          )
    }
  
}

export default Login