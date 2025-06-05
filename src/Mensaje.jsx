import { useEffect } from "react";

//{nombre} es una prop que se le pasa al componente Mensaje desde el componente padre ContenedorMensaje.jsx
// esa prop se puede usar dentro del componente Mensaje para mostrar el nombre
// debe ir en el paréntesis de la función Mensaje y escribirse igual que en el componente padre
// tambien puede ser escrita como props, y luego acceder a ella con props.nombre
// pero es más común usar destructuring para acceder a las props directamente
// en este caso, se usa destructuring para acceder a la prop nombre directamente
// y no tener que escribir props.nombre cada vez que se quiera acceder a la prop nombre
// por otro lado se podria usar solo props en el parentesis y usar luego destructuring dentro del componente ejemplo:
// Mensaje = (props) => {
//     const {nombre} = props;
//     ...
// }
const Mensaje = ({nombre}) => {
    useEffect(() => {
        // Este efecto se ejecuta una vez al montar el componente
        console.log("Componente Mensaje montado");

        //funcion cleanup que se ejecuta al desmontar el componente
        return () => {
            console.log("Componente Mensaje desmontado");
        };
    }, []);
    //  [] indica que el efecto se ejecuta solo una vez al montar el componente

    useEffect(() => {
        // Este efecto se ejecuta cada vez que cambia el nombre
        console.log(`El nombre ha cambiado a: ${nombre}`);
    }, [nombre]);
    return (
        <p>
      Hola, {nombre} soy un componente temporal que se monta y desmonta! 👋      
        </p>
    );
};

export default Mensaje;