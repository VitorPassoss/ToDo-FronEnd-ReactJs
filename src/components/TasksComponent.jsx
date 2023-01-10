import React, { useState } from 'react';
import axios from "axios";
import FormTodoComponent from '../components/FormTodoComponent';

const TasksComponent = ({idtask,userId,title,task,state}) => {
  const url = `https://todobackend-hp2z.onrender.com/delete/${userId}`
  const [useEdit, setEdit] = useState(false)
  const [UseVisible,setUseVisible] = useState(false)
  const [stat, setStat] = useState(null)

  const DeleteTask = async () => {
      await axios.get(url)
      .then((response) => {
          window.location.href = 'http://localhost:5173/';
        })
      .catch(err => console.log(err) )
  }

  const SetVisibility = async () => {
      setUseVisible(true)
      setEdit(true)
  }


  return (
  
    <div className='h-[100%] bg-[#110e1b]  border-[2px] rounded-lg border-[#6134CB]'>
    <FormTodoComponent visible={UseVisible} idtask={idtask} UserId={userId} title={title} task={task}  state={state} edit={useEdit}></FormTodoComponent>

      <div className=''>
        <div className='flex row justify-between bg-[#6134CB] p-2'>
          <div>
              <p className='text-[#ffffff] text-center break-all  whitespace-normal'>{title}</p>
          </div>
          <p className= {`text-white text-center break-all  whitespace-normal p-2 rounded ${state == "feito" ? 'bg-[#00ff377c]' : 'bg-[#ec267971]'} ${state == "em andamento" ? 'bg-[#226c8ab6]' : ''} `}>{state}</p>

          

        </div>
        <div className=' p-2'>
          <p className='text-white text-center break-all  whitespace-normal p-6'>{task}</p>
          <div className='flex row justify-end'>
            <button onClick={DeleteTask}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
            
            <button onClick={SetVisibility} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </button>
          </div>
        </div>
        
      </div>
    </div>


        
  )
}

export default TasksComponent