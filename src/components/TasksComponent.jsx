import React from 'react'

const TasksComponent = ({title,task,state}) => {
  return (
    <div>
        <h1>{title}</h1>
        {task}
    </div>
  )
}

export default TasksComponent