
import { useEffect, useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/tasks")
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div style={{
            fontFamily: "Arial",
            padding: "40px",
            maxWidth: "600px",
            margin: "auto"
        }}>
            <h1>My Task Manager</h1>

            <h2>My Tasks</h2>

            {tasks.map(task => (
                <p key={task.id}>
                    {task.id}. {task.title}
                </p>
            ))}
        </div>
    );
}

export default App;
