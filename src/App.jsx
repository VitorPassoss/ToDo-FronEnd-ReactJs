import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoutes from './components/PrivateRoute';
function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                  <Route exact path='/' element={<ProtectedRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                  </Route>
                  <Route exact path='/register' element={<Register/>}/>
                  <Route exact path='/login' element={<Login/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
