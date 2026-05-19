// Componente que recive la lista de eventos para renderizarlo
// Se encarga de iterar sobre ellos y mostrar un EventItem por cada uno.

import EventItem from './EventItem'

function EventList({ events }) {
  return (
    <div>

      {/* Recorremos el arrray de eventos y renderiza una tarjeta individual */}
      {events.map(event => (
        <EventItem 
        //key ayuda a React a identificar elementos únicos.
        key={event.id} 
        // Evento enviado mediante props
        event={event} />
      ))}
    </div>
  )
}

export default EventList