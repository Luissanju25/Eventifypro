// Este componente muestra la información detallada de un evento seleccionado.
// Obtiene el evento desde el contexto global usando su id.

import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { EventsContext } from '../context/EventsContext'

function Detail() {
  // Acceder a los eventos globales
  const { events } = useContext(EventsContext)
  
  //  useParams Obtiene el id desde la URL
  const { id } = useParams()

  // Buscar el evento correspondiente
  const event = events.find(
    e => Number(e.id) === Number(id)
  )

  // Si no existe el evento
  if (!event) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Evento no encontrado</h2>
      <p>El evento que buscas no existe o ha sido eliminado.</p>
    </div>
  )
}

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto" }}>

      <div style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start"
      }}>

        {/* CONTENIDO DEL EVENTO */}
        <div style={{ flex: 1 }}>

          <h1>{event.title}</h1>

          <p><strong>📍 Ubicación:</strong> {event.location}</p>
          <p><strong>📅 Fecha:</strong> {event.date}</p>
          <p>
            <strong>💰 Precio:</strong>{" "}
            {event.isFree && event.isFree()
              ? "Gratis"
              : `${event.price}€`}
          </p>

          <p style={{ marginTop: "15px" }}>
            {event.description}
          </p>

        </div>

        {/* IMAGEN DEL EVENTO */}
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            style={{
              width: "500px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        )}

      </div>

    </div>
  )
}

export default Detail