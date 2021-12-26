import { useState } from "react"

function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remainder, setRemainder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please enter a task')
            return
        }

        onAdd({text, day, remainder})

        setText('')
        setDay('')
        setRemainder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" name="" placeholder="Add Task" 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" name="" placeholder="Add day & time" 
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" name="" id="" 
                checked={remainder}
                value={remainder} onChange={(e) => setRemainder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
