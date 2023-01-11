import React, { useState } from 'react'
import axios from "axios";

const FormTodoComponent = ({idtask, visible, UserId , title , task , state , edit}) => {
  const [useTitle, setTitle] = useState(title)
  const [useTask, setUseTask] = useState(task)
  const [useStatus, setUseState] = useState(state)
  const url = "https://todobackend-3mba.onrender.com/todoadd"
  const urlUp = `https://todobackend-3mba.onrender.com/update/`


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(edit == true) {
         
        const TaskUpdate = {
          "idtask":idtask,
          "userid":UserId,
          "title":useTitle,
          "task":useTask,
          "state":useStatus
        };

        return axios.post(urlUp, TaskUpdate)
        .then((response) => {
            console.log(response)
            window.location.reload();
          })
        .catch(err => console.log(err) )
    }
    else{
      const Task = {
        "userid":UserId,
        "title":useTitle,
        "task":useTask,
        "state":useStatus
      };
  
      return axios.post(url, Task)
      .then((response) => {
          console.log(response)
          window.location.reload()
        })
      .catch(err => console.log(err) )
      
    }
  

  }





  if(visible == true ){
    return (
      <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center  ">
                  <div className='p-12  rounded-lg fixed top-[20%] bg-[#241547]'>
                  <label htmlFor='email' className="w-full text-white form-label inline-block mb-4">
                        Titulo 
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
                      " type="text"  
                        value={useTitle}
                        name="email"
                        onChange={(e)=> {setTitle(e.target.value)}} />
                    </label>
                    
                    <label htmlFor='task' className="w-full text-white form-label inline-block mb-4">
                        Task 
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
                      " type="text"  
                        value={useTask}
                        name="email"
                        onChange={(e)=> {setUseTask(e.target.value)}} />
                    </label>

                    <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-white">Select an option</label>
                    <select id="countries" class="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={useStatus}
                    name="option"
                    onChange={(e)=> {setUseState(e.target.value)}}
                    >
                      <option selected>Status da task</option>
                      <option value="á fazer">á fazer</option>
                      <option value="em andamento">em andamento</option>
                      <option value="feito">feito</option>
                    </select>


                    <div className="flex space-x-2 w-full justify-center">
                    <button type="submit"  className="  w-full inline-block px-6 py-2.5 bg-[#0d0c11] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#996DFF] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Criar Task</button>
                    </div>
                   
                    </div>  
                </form>
      </div>
    )
  }else{
    return(
      <div></div>
    )
  }
}

export default FormTodoComponent
