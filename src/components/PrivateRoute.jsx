
import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'
import Home from '../pages/Home';

const useAuth=()=>{
  const user=localStorage.getItem('tokenUser')
  if(user){
    return true
  } else {
    return false
  }
}

const  ProtectedRoutes=(props) =>{

  const auth=useAuth()

  return auth?<Home/>: <Navigate to="/login"/>
}

export default ProtectedRoutes;