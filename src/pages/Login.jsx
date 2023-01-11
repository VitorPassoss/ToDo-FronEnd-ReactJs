import React, { useState } from 'react';
import axios from "axios";
import FailedComponent from '../components/FailedComponent';
import LoadingComponent from '../components/LoadingComponent';
import {Navigate, Outlet} from 'react-router-dom'



const Login = () => {
    const [useEmail, setEmail] = useState("")
    const [usePassword, setPassword] = useState("")
    const [useStatus, setUseStatus] = useState(null)
    const [navigate, setnavigate] = useState(false)

    const url = "https://todobackend-3mba.onrender.com/login"

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUseStatus("loading")
        const User = {
          "email":useEmail,
          "password":usePassword
        };
    
        axios.post(url, User)
        .then((response) => {
            console.log(response)
            localStorage.setItem("tokenUser", response.data.tokenUser);
            localStorage.setItem("dataUser",JSON.stringify(response.data.dataUser[0]))
            setnavigate(true)
          })
        .catch(err => setUseStatus("falha no envio") )
      }

      if(navigate == true){
        return  <Navigate to="/"/>
      }else{

        return (
            <div className='flex flex-col items-center '>
                <div>
                    <h1 className='text-white pt-[45%] text-[30px]'>Tenha um To-do list <span className='text-[#6134CB]'>apenas seu!</span> </h1>
                </div>
                <div  className='w-[70%]  sm:w-[55%] md:w-[45%] lg:w-[35%] mt-[2%]'>
                <form onSubmit={handleSubmit} className="flex flex-col items-center ">
                    
                    <label htmlFor='email' className="w-full text-white form-label inline-block mb-4">
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
                    <label  htmlFor='password' className="w-full text-white form-label inline-block mb-8 ">
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
                    <button type="submit"  className="  w-full inline-block px-6 py-2.5 bg-[#6134CB] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#996DFF] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Fazer login</button>
                    </div>
                    <div className='w-full mt-[15%] '>
                      <a href="/register"><p className='text-white mb-4 text-center	'>Não tem uma conta? clique aqui para se registrar</p></a>
                    </div>
                </form>
                </div>
                { useStatus == "falha no envio" ? <FailedComponent status={useStatus}></FailedComponent>: null}
                { useStatus == "loading" ?  <LoadingComponent ></LoadingComponent> : null}
            </div>
          )
    

        }
  
}

export default Login
