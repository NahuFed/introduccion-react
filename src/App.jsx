import { use, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [valorInput, setValorInput] = useState("");
  const [tareas, setTareas] = useState([{ id: 1, texto: "tarea 1", completada: true },
      { id: 2, texto: "tarea 2", completada: false }]);
  const [completadas, setCompletadas] = useState([]);
  const [pendientes, setPendientes] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  

  useEffect(() => {
    // Al iniciar la aplicación, se filtran las tareas
    setFiltradas(tareas);
  }, [tareas]);

  useEffect(() => {
    const tareasCompletadas = tareas.filter((tarea) => tarea.completada);
    const tareasPendientes = tareas.filter((tarea) => !tarea.completada);
    setCompletadas(tareasCompletadas);
    setPendientes(tareasPendientes);
  }, [tareas]);

  function agregarTarea() {
    if (valorInput.trim() === "") {
      alert("Por favor, ingresa una tarea.");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      texto: valorInput,
      completada: false,
    };
    //spread operator crea una copia del array tareas y agrega la nueva tarea al final
    setTareas([...tareas, nuevaTarea]);
    setValorInput("");
  }

  function completarTarea(id){
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: true };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  

  function eliminarTarea(id) {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const [tareasOriginales, setTareasOriginales] = useState([]);




  function filtrar(filtro){
   
  let tareasFiltradas ;
  switch (filtro) {
      case 'completadas':
        tareasFiltradas = completadas
        break;
      case 'pendientes':
        tareasFiltradas = pendientes
        break;
      case 'todas':
        tareasFiltradas = tareas;
        break;
      default:
        tareasFiltradas = tareas;
        break;
      }
      setFiltradas(tareasFiltradas);        
  }


  return (
    <>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => {
          setValorInput(e.target.value);
        }}
        placeholder="Escribi una tarea"
      />
              <button onClick={agregarTarea}>Agregar Tarea</button>
            <button onClick={()=>filtrar('completadas')}>Completadas</button>
            <button onClick={()=>filtrar('pendientes')}  >Pendientes</button>
            <button onClick={()=>filtrar('todas')}>Todas</button>
      <ul>
        {filtradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? "completada" : ""}>
            {tarea.texto} <button onClick={()=>completarTarea(tarea.id)}>✅</button> <button onClick={()=>eliminarTarea(tarea.id)}>🗑️</button>
          </li>
        ))}
      </ul>


    </>
  );
}

export default App;
