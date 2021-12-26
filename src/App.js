import { useState } from "react"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState (
      [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            remainder: true
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            remainder: true
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30pm',
            remainder: false
        }
    ]
  )

  //Add task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks ([...tasks, newTask]) 
  }

  //Delete a task
  const deleteTask = (id) =>{
    setTasks(tasks.filter( (task) => task.id !== id)) 
  }

  //Toggle Remainder
  const toggleRemainder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, remainder: !task.remainder} : task
    ))
  }

  return (
    <div className="container">
      <Header 
      onAdd = {() => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleRemainder}/>
    </div>
  );
}

export default App;
