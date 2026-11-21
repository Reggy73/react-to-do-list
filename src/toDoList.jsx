import { useState } from 'react';

function ToDoList(){
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([]);

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask(){
        setTask(t => [...t, newTask]);
        setNewTask('');
    }

    const taskList = task.map(t => <p>{t}</p>)


    return (
        <>
            <div className='to-do-list-container'>
                <h1>To do list</h1>
                <input type='text' id='task-input' value={newTask} onChange={handleInputChange} placeholder='Add a task' />
                <button type='submit' onClick={addTask}>Add task</button>
                <div>
                    {taskList}
                </div>
            </div>
        </>
    )
}

export default ToDoList;