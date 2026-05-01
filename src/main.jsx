/**Punto de entrada de la aplicacion con el que renderizamos el componente principal (App)
 * dentro del DOM y se envuelve globalmente con el contexto para compartir el estado de los
 * componentes
 */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { EventsProvider } from './context/EventsContext'

//Renderizado principal de la aplicacion
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </React.StrictMode>,
)