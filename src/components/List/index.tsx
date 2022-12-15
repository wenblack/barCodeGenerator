import { useState, useEffect } from "react";
import Barcode from "react-barcode";

export function List() {
    const [taskNumber, setTaskNumber] = useState(1)
    const [tasks, setTasks] = useState(null || [''])
    const [newTask, setnewTask] = useState('')

    useEffect(() => {

    }, [newTask, taskNumber, tasks])

    function handleChange(e: any) {
        setnewTask(e.target.value)
        console.log(newTask)
    }


    function add() {
        setTaskNumber(taskNumber + 1)
        tasks.push(newTask)
        console.log(taskNumber)
        console.log(tasks)

    }
    return (
        <div >
            <input type="text" onChange={handleChange} style={{
                display: 'block', margin: '0 auto'
            }} />
            <button onClick={add}>Adicionar</button>
            <ul>
                {tasks.map(tarefa =>
                    <li>
                        <Barcode value={tarefa}></Barcode>
                    </li>
                )}
            </ul>
        </div>
    );
}
