import React from 'react'
import axios from "axios";
import { useState , useEffect} from "react";
import TasksComponent from '../components/TasksComponent';
import ProfileComponent from '../components/ProfileComponent';

const Home = () => {
  let data =  localStorage.getItem("dataUser")
  let User = JSON.parse(data)
  let Username = User.name
  let Email = User.email
  let UserId = User._id
  const [UseTasks,SetUseTasks] = useState([])

  const url = `http://localhost:3000/tasks/${UserId}`

  useEffect(() => {
    async function fetchData() {
        axios.get(url)
        .then((response) => {
            SetUseTasks(response.data)
            console.log(UseTasks)
        })
        .catch(err => console("falha no envio") )
      }

    fetchData();
    
  }, []);

  return (
    <div className='w-full'> 
        <ProfileComponent name={Username} email={Email}></ProfileComponent>
        
        <div className='flex flex-col items-center '>
            <div className='w-[40%] h-[100%]'>
              
              <div className='p-4 mt-[10%] bg-[#28272b] rounded-lg '>

              <div className='flex row justify-between p-2'>
         

            
        </div>
                
                {
                    UseTasks.map((task)=>(
                       <TasksComponent key={task._id} title={task.title} task={task.task} state={task.state}/>
                     ))
                    }
              </div>
               
            </div>
      
        </div>
          
    </div>
  )
}

export default Home