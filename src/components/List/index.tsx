import { useState, useEffect, useRef } from "react";
import Barcode from "react-barcode";
import ReactToPrint from "react-to-print";
import { LogoWithoutWords } from "../../assets/LogoWithoutWords";

export function List() {
  const [taskNumber, setTaskNumber] = useState(1);
  const [tasks, setTasks] = useState(null || [""]);
  const [newTask, setNewTask] = useState("");
  const [isHide, setIsHide] = useState(false);
  const [width, setWidth] = useState(2);
  const componentRef = useRef<HTMLDivElement>(null)


  const DefaultCode = () => {
    if (taskNumber === 1) {
      return (
        <div >
          <ul className="Lista" id="Lista">
            <li
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                border: "1px dashed black"
              }}
            >
              <Barcode
                height={50}
                displayValue={isHide}
                value={"exemplo"}
                width={width}
                fontSize={32}
              ></Barcode>
            </li>
          </ul>
        </div>

      );
    } else {
      return (

        <div ref={componentRef}>
          <ReactToPrint
            trigger={() => <button>imprimir</button>}
            content={() => componentRef.current}
          />
          <ul className="Lista" id="Lista" style={{
            marginTop: '10cm',
            width: '10cm'
          }}>
            {tasks.map((tarefa) => (
              <li
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  border: "1px dashed black",
                  alignItems: 'center',
                  maxWidth: '10cm',
                  height: '5cm',
                }}
              >
                <Barcode
                  height={50}
                  displayValue={isHide}
                  value={tarefa}
                  width={width}
                  fontSize={32}
                ></Barcode>
                <LogoWithoutWords></LogoWithoutWords>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  useEffect(() => { }, [newTask, taskNumber, tasks, isHide, width]);
  function selectChange(e: any) {
    setWidth(e.target.value);
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
    } else if (taskNumber === 1) {
      setTaskNumber(taskNumber + 1);
      let taskFormatted = newTask.split(",");
      setTasks(taskFormatted);
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
    <div id="tickets">
      <form id="text-ticket" onSubmit={submitted} className="no-print">
        <input
          type="text"
          form="text-ticket"
          placeholder="Digite o código"
          onChange={handleChange}
          style={{
            margin: "0 auto",
            padding: "10px",
            outline: "none",
            border: "none",
            borderRadius: "10px",
            marginRight: "1rem"
          }}
        />
        <button
          id="create-ticket"
          form="text-ticket"
          onClick={add}
          type="button"
          style={{
            marginTop: "1rem",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Adicionar
        </button>
        <span
          id="ticket-options"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "1rem"
          }}
        >
          <input
            type="checkbox"
            onClick={hide}
            name="displayValue"
            id="displayValue"
          />
          <label htmlFor="displayValue">Mostrar valor</label>
          <select
            name="size"
            defaultValue={2}
            style={{
              outline: "none",
              marginLeft: "30px",
              padding: "8px",
              border: "none",
              borderRadius: "5px",
              marginRight: "1rem"
            }}
            onChange={selectChange}
          >
            <option value={1}>Pequena</option>
            <option value={2}>Média</option>
            <option value={3}>Grande</option>
          </select>
          <button
            onClick={print}
            type="button"
            id="print-tickets"
            style={{
              color: "white",
              fontWeight: "bold"
            }}
          >
            Imprimir
          </button>
        </span>
      </form>
      <DefaultCode />
    </div>
  );
}
