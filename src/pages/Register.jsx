import React, { useState } from 'react';
import axios from "axios";
import FailedComponent from '../components/FailedComponent';
import LoadingComponent from '../components/LoadingComponent';


const Register = () => {
  const [useUsername, setUsername] = useState("")
  const [useEmail, setEmail] = useState("")
  const [usePassword, setPassword] = useState("")
  const [useStatus, setUseStatus] = useState(null)

  const url = "https://todobackend-3mba.onrender.com/cadastro"
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setUseStatus("loading")
    const User = {
      "name":useUsername,
      "email":useEmail,
      "password":usePassword
    };

    axios.post(url, User)
    .then((response) => {
        setUseStatus(true)
        console.log(response)
        window.location.href = 'https://to-do-fron-end-react-11uzw7gjm-vitorpassoss.vercel.app/login';

    })
    .catch(err => setUseStatus("falha no envio" + err) )
  }
  
  return (
    <div className='flex flex-col items-center '>
        <div>
          <h1 className='text-white pt-[45%] text-[30px]'>Tenha um To-do list <span className='text-[#6134CB]'>apenas seu!</span> </h1>
        </div>

        <div className='w-[25%] mt-[2%]'>
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
              <label htmlFor='name' className="w-full text-white form-label inline-block mb-4">
                  name: 
                  <input type="text" 
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
                "  
                  value={useUsername}
                  name="username" 
                  onChange={(e)=> {setUsername(e.target.value)}} />
              </label>
              <label htmlFor='email' className="w-full text-white form-label inline-block mb-4">
                  Email : 
                  <input type="email"
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
                " 
                  value={useEmail}
                  name="email"
                  onChange={(e)=> {setEmail(e.target.value)}} />
              </label>
              <label htmlFor='password' className="w-full text-white form-label inline-block mb-8 ">
                  password : 
                  <input type="password"
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' 
                  value={usePassword}
                  name="password"
                  onChange={(e)=> {setPassword(e.target.value)}} />
              </label>
              <div className="flex space-x-2 w-full justify-center">
                  <button type="submit"  className="  w-full inline-block px-6 py-2.5 bg-[#6134CB] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#996DFF] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Fazer Cadastro</button>
              </div>
              <div className='w-full mt-[15%] '>
                      <a href="/login"><p className='text-white mb-4 text-center	'>já tem uma conta? clique aqui para entrar</p></a>
                    </div>
          </form>
        </div>
        { useStatus == "falha no envio" ? <FailedComponent status={useStatus}></FailedComponent>: null}
        { useStatus == "loading" ?  <LoadingComponent ></LoadingComponent> : null}

     </div>
    
   
  )
 
}

export default Register
