import React from 'react'
import axios from "axios";
import { useState , useEffect} from "react";
import TasksComponent from '../components/TasksComponent';

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
    <div>
         <ul>
                {
                  UseTasks.map((task)=>(
                    <TasksComponent key={task._id} title={task.title} task={task.task} state={task.state}/>
                  ))
                }
            </ul>
    </div>
  )
}

export default Home