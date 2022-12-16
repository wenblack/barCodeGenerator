import { useState, useEffect } from "react";
import Barcode from "react-barcode";
import mro from '../../assets/logo_mro.png'

export function List() {
  const [taskNumber, setTaskNumber] = useState(1);
  const [tasks, setTasks] = useState(null || [""]);
  const [newTask, setNewTask] = useState("");
  const [isHide, setIsHide] = useState(false)
  const [widht, setWidht] = useState(2)

  useEffect(() => { }, [newTask, taskNumber, tasks, isHide, widht]);
  function selectChange(e: any) {
    setWidht(e.target.value)
  }
  function handleChange(e: any) {
    setNewTask(e.target.value);
  }
  function submitted(e: { preventDefault: () => void }) {
    e.preventDefault();
    add();
  }
  function add() {
    if (newTask === "" || null || undefined) {
      alert("Digite algo para pesquisar");
    } else {
      setTaskNumber(taskNumber + 1);
      let taskFormatted = newTask.split(",");
      setTasks(tasks.concat(taskFormatted));
    }
  }
  function hide(e: any) {
    setIsHide(e.target.checked);
  }
  return (
    <div>
      <form id="search-form" onSubmit={submitted} className="no-print">
        <input
          type="text"
          form="search-form"
          placeholder="Diigite o código"
          onChange={handleChange}
          style={{
            margin: "0 auto",
            padding: '10px',
            outline: 'none',
            border: 'none',
            borderRadius: '10px',
            marginRight: '1rem'
          }}
        />
        <button
          form="search-form"
          onClick={add}
          type="button"
          style={{
            marginTop: "1rem",
            backgroundColor: '#000',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Adicionar
        </button>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '1rem' }}>
          <input type="checkbox" onClick={hide} name="displayValue" id="displayValue" />
          <label htmlFor="disdisplayValue">Mostrar valor</label>
          <select
            name="select"
            defaultValue={2}
            style={{ outline: 'none', marginLeft: '30px', padding: '8px', border: 'none', borderRadius: '5px', marginRight: '1rem' }}
            onChange={selectChange}
          >
            <option value={1} >Pequena</option>
            <option value={2} >Média</option>
            <option value={3}>Grande</option>
          </select>
          <button
            onClick={print}
            type="button"
            style={{
              backgroundColor: '#000',
              color: 'white',
              fontWeight: 'bold'
            }}>Imprimir</button>
        </span>
      </form>
      <ul className="Lista" id="Lista">
        {tasks.map((tarefa) => (
          <li style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', border: '1px solid black' }}>
            <Barcode height={50} displayValue={isHide} value={tarefa} width={widht}></Barcode>
            <img src={mro} style={{
              height: '3cm',
              width: '5cm'
            }}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
