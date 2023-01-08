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
            <div className='flex flex-col items-center '>
                <div  className='w-[25%] mt-[10%]'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center ">
                    
                    <label htmlFor='email' className="w-full text-white form-label inline-block mb-4 text-gray-700">
                        Email 
                        <input 
                        className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        mt-2
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      " type="email"  
                        value={useEmail}
                        name="email"
                        onChange={(e)=> {setEmail(e.target.value)}} />
                    </label>
                    <label  htmlFor='password' className="w-full text-white form-label inline-block mb-8 text-gray-700">
                        Password
                        <input
                        className='form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        mt-2
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="password"  
                        value={usePassword}
                        name="password"
                        onChange={(e)=> {setPassword(e.target.value)}} />
                    </label>
                    <div className="flex space-x-2 w-full justify-center">
                    <button type="submit"  className="  w-full inline-block px-6 py-2.5 bg-[#6134CB] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#996DFF] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </form>
                </div>

                <div>
      
    </div>
    <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,133.3C840,139,960,213,1080,234.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                
            </div>
          )
    }
  
}

export default Login