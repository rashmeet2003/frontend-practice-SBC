import { useState } from "react";

function App() {

    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([
        "Revise JavaScript",
        "Practice Frontend"
    ]);

    function addTask() {

        // TODO:
        // If task is empty, do nothing

        // Add the new task to tasks

        // Clear the input

    }

    function deleteTask(indexToDelete) {

        // TODO:
        // Remove only the selected task

    }

    return (
        <div>

            <h1>Task Manager</h1>

            <input aria-label="Task"
                value={task}
                onChange={(event) => {
                    // TODO
                }}
                placeholder="Enter task"
            />

            <button onClick={addTask}>
                Add Task
            </button>

            <ul>

                {tasks.map((item, index) => (

                    <li key={index}>

                        {item}

                        <button
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;
