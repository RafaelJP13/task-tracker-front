import { useState } from "react"

const AddTask = () => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' value={text} onChange={e => setText(e.target.value)} palceholder='Add Task'/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' value={day}  onChange={e => setDay(e.target.value)} palceholder='Add day & Time'/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' value={reminder}  onChange={e => setReminder(e.currentTarget.checked)} />
        </div>
        <input className='btn btn-block' type='submit' value='Save Task'/>
    </form>
  )
}

export default AddTask