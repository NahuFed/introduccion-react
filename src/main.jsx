import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ListaDeTareas from './ListaDeTareas.jsx'
import ContenedorMensaje from './ContenedorMensaje.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ListaDeTareas />
    <ContenedorMensaje />
  </StrictMode>,
)
