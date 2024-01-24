import {useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'


const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState ({
        task:'',
        status:'todo',
        tags: [],
    })

    const checkTag = (tag) =>{
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev =>{
                return {...prev, tags: filterTags }
            })
        }
        else{
            setTaskData(prev => {
                return{...prev, tags: [...prev.tags, tag]}
            })
        }
    }

    const handleChange = (e) => {
        const {name, value} =e.target

       setTaskData(prev => {
        return {...prev, [name]: value }
       })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(taskData)
        setTasks((prev) => {
            return[...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        })
    }
    // [
    //     {
    //         task:'Complete Project 01',
    //         status:'Doing',
    //         tags:['HTML, CSS, React']
    //     },
    //     {
    //         task:'Complete TaskTrek frontend',
    //         status:'Done',
    //         tags:['HTML, CSS']
    //     },
    //     {
    //         task:'Pracice on this project',
    //         status:'To do',
    //         tags:['React']
    //     },
    // ]

  return (
    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" 
                name='task' 
                value={taskData.task}
                className='task_input' placeholder='Enter habit'
                onChange={handleChange} 
            />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag 
                        tagName ='Fair' 
                        selectTag={selectTag} 
                        selected ={checkTag ('Fair')} 
                    />
                    <Tag 
                        tagName = 'Bad' 
                        selectTag={selectTag} 
                        selected ={checkTag ('Bad')} 
                    />
                    <Tag 
                        tagName = 'Worse' 
                        selectTag={selectTag} 
                        selected ={checkTag ('Worse')}  
                    />
                   
                </div>

                <div>
                    <select 
                       name='status' 
                       value={taskData.status}
                       className='task_status' 
                        onChange={handleChange}>
                        <option value="todo">Habit</option>
                        <option value="doing">In progress</option>
                        <option value="done">Changed</option>
                    </select>
                    <button type='submit' className='task_submit'> + Add habit</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
