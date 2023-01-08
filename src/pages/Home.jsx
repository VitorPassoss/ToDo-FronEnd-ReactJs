import React from 'react'
import axios from "axios";
import { useState , useEffect} from "react";

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
                    <li key={task._id}>
                       {task.title} -{task.task}
                    </li>
                  ))
                }
            </ul>
    </div>
  )
}

export default Home