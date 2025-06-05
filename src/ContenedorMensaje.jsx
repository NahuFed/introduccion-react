import { useState } from "react";
import Mensaje from "./Mensaje.jsx";

const ContenedorMensaje = () => {

    const [mostrarMensaje, setMostrarMensaje] = useState(true);
    const [nombre, setNombre] = useState("Sofia");

    return (
        <div>
            <button onClick={() => setMostrarMensaje(!mostrarMensaje)}>
                {mostrarMensaje ? "Ocultar Mensaje" : "Mostrar Mensaje"}
            </button>

            <button onClick={() => setNombre("Juan")}>
                Cambiar Nombre a Juan
            </button>
            {mostrarMensaje && <Mensaje nombre={nombre}/>}
            
        </div>
    );
    //nombre={nombre} es una prop que se le pasa al componente Mensaje(componente hijo)
    //cuando se cambia el estado de nombre, el componente Mensaje se vuelve a renderizar
};

export default ContenedorMensaje;