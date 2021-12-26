import {FaTimes} from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
    return (
        <div className={`task ${task.remainder ? 'remainder' : ''}`}
            onDoubleClick={ () => onToggle(task.id)}>
            <h5 >{task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                onClick = { () => onDelete(task.id)}/> 
            </h5>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
