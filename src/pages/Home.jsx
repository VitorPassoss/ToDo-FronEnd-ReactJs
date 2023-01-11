import React from 'react'
import axios from "axios";
import { useState , useEffect} from "react";
import TasksComponent from '../components/TasksComponent';
import ProfileComponent from '../components/ProfileComponent';
import FormTodoComponent from '../components/FormTodoComponent';

const Home = () => {
  let data =  localStorage.getItem("dataUser")
  let User = JSON.parse(data)
  let Username = User.name
  let Email = User.email
  let UserId = User._id
  const [UseTasks,SetUseTasks] = useState([])
  const [UseVisible,setUseVisible] = useState(false)

  const url = `https://todobackend-3mba.onrender.com/tasks/${UserId}`

  useEffect(() => {
    async function fetchData() {
        axios.get(url)
        .then((response) => {
            SetUseTasks(response.data)
        })
        .catch(err => console("falha no envio") )
      }

    fetchData();
    
  }, []);

  return (
    <div className='w-full'> 
        <ProfileComponent name={Username} email={Email}></ProfileComponent>
        <div className='flex flex-col items-center '>
            <div className='w-[100%] sm:w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%] h-[100%]'>
              <div className='p-4 mt-[10%]  rounded-lg '>
                <div className='flex row justify-center p-2'>
          
                <div>
                  <div className="flex space-x-2 w-full justify-center">

                      <button  onClick={()=>{setUseVisible(true)}} type="submit"  className="flex justify-center row   w-full  px-8 py-2.5 bg-[#6134CB] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#996DFF] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>

                        <span className='pt-1'>Nova Task</span> </button>
                  </div>
                </div>
              
                  </div>
              </div> 
            </div>

            <div className='w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[60%]  bg-[#28272b] p-6 rounded-lg'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                      { 
                        UseTasks.map((task)=>(
                              <TasksComponent key={task._id}  idtask={task._id} userId={UserId} title={task.title} task={task.task} state={task.state}/>
                            ))
                      }
                  </div>                        
            </div>
        </div>
        <FormTodoComponent visible={UseVisible } UserId={UserId}  ></FormTodoComponent>
    </div>
  )
}

export default Home
