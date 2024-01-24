/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import './TaskColumn.css'
import Todo from '/direct-hit.png'
import TaskCard from './TaskCard'

const TaskColumn = ({ title, icon, tasks, status, handleDelete}) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
          <img className='task_column_icon' src={icon} alt="todo" />{title}
      </h2>

      {/* <TaskCard /> */}

      {tasks.map(
          (task, index) => 
          task.status === status && (
            <TaskCard 
            key={index}
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            index={index}
            />
          )
      )}
        
    </section>
  )
}

export default TaskColumn
