import { useState } from "react";
import "./App.css";

function ListaDeTareas() {
  const [valorInput, setValorInput] = useState("");
  const [tareas, setTareas] = useState([
    { id: 1, texto: "tarea 1", completada: true },
    { id: 2, texto: "tarea 2", completada: false }
  ]);
  const [filtro, setFiltro] = useState("todas");

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
    setTareas([...tareas, nuevaTarea]);
    setValorInput("");
  }

  function completarTarea(id) {
    setTareas(
      tareas.map(tarea =>
        tarea.id === id ? { ...tarea, completada: true } : tarea
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }

  // Calcular las tareas filtradas en cada render
  const tareasFiltradas =
    filtro === "completadas"
      ? tareas.filter(tarea => tarea.completada)
      : filtro === "pendientes"
      ? tareas.filter(tarea => !tarea.completada)
      : tareas;

  return (
    <>
      <input
        type="text"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Escribi una tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <button onClick={() => setFiltro("completadas")}>Completadas</button>
      <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
      <button onClick={() => setFiltro("todas")}>Todas</button>
      <ul>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? "completada" : ""}>
            {tarea.texto}{" "}
            <button onClick={() => completarTarea(tarea.id)}>✅</button>{" "}
            <button onClick={() => eliminarTarea(tarea.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListaDeTareas;