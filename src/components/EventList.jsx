// Componente que recive la lista de eventos para renderizarlo
// Se encarga de iterar sobre ellos y mostrar un EventItem por cada uno.

import EventItem from './EventItem'

function EventList({ events }) {
  return (
    <div>

      {/* Recorremos los eventos */}
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList