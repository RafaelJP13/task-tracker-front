import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const  App = () => {

  const [tasks, setTasks] = useState([

    {

        id:1,
        text:'Limpar o quarto',
        day:'Feb 5th at 6:30am',
        reminder:false,

    },

    {
        
        id:2,
        text:'Café da manhã',
        day:'Feb 5th at 7:30am',
        reminder:false,
    },

    {
        id:3,
        text:'Exercícios fsicos',
        day:'Feb 5th at 8:30am',
        reminder:false,
    },

])


const addTask = task =>{

  console.log(task)
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

const toggleReminder = id => setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))

const deleteTask = id => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd={addTask} />
      {tasks.length > 0  
      ? 
      (<Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />)
      :
      (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App
