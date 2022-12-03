import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

const deleteTask = id =>{

  setTasks(tasks.filter(task => task.id !== id))

}


  return (
    <div className="container">
      <Header/>
      {tasks.length > 0  
      ? 
      (<Tasks tasks={tasks} onDelete={deleteTask}/>)
      :
      (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App
