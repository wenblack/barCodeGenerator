import { useState, useEffect } from "react";
import Barcode from "react-barcode";

export function List() {
  const [taskNumber, setTaskNumber] = useState(1);
  const [tasks, setTasks] = useState(null || [""]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {}, [newTask, taskNumber, tasks]);

  function handleChange(e: any) {
    setNewTask(e.target.value);
    console.log(newTask);
  }
  function submitted(e: { preventDefault: () => void }) {
    e.preventDefault();
    add();
    console.log("Form submitted");
  }
  function add() {
    if (newTask === "" || null || undefined) {
      alert("Digite algo para pesquisar");
    } else {
      setTaskNumber(taskNumber + 1);
      let taskFormatted = newTask.split(",");
      console.log(taskFormatted);
      tasks.push(newTask);
      console.log(taskNumber);
      console.log(tasks);
    }
  }
  return (
    <div>
      <form id="search-form" onSubmit={submitted}>
        <input
          type="text"
          form="search-form"
          onChange={handleChange}
          style={{
            display: "block",
            margin: "0 auto"
          }}
        />
        <button
          form="search-form"
          onClick={add}
          type="button"
          style={{
            marginTop: "1rem"
          }}
        >
          Adicionar
        </button>
      </form>
      <ul>
        {tasks.map((tarefa) => (
          <li>
            <Barcode value={tarefa}></Barcode>
          </li>
        ))}
      </ul>
    </div>
  );
}
