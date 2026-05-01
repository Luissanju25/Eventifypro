//Componente para representar la tarjeta individual para cada uno de los eventos
//Mostraremos la informacion, permitiendo editar o borrar el evento 

import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { EventsContext } from '../context/EventsContext'

function EventItem({ event }) {
  const { deleteEvent } = useContext(EventsContext)
  const navigate = useNavigate()

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        padding: "12px",
        margin: "8px 0",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        display: "flex",
        gap: "12px",
        alignItems: "flex-start"
      }}
    >
      
      

      {/* CONTENIDO que mostramos en la tarjeta */}
      <div style={{ flex: 1 }}>

        <h3 style={{ margin: "0 0 5px 0" }}>{event.title}</h3>

        <p style={{ margin: "5px 0" }}>
          <strong>Resumen:</strong>{" "}
          {event.getSummary
            ? event.getSummary()
            : `${event.title} - ${event.location}`}
        </p>

        <p style={{ margin: "5px 0" }}>
          <strong>📍</strong> {event.location}
        </p>

        <p style={{ margin: "5px 0" }}>
          <strong>📅</strong> {event.date}
        </p>

        {/* LINK */}
        <Link to={`/event/${event.id}`} style={{ textDecoration: "none" }}>
          <p style={{ color: "#4a5568", margin: "8px 0", cursor: "pointer" }}>
            Ver detalles →
          </p>
        </Link>

        {/* BOTONES */}
        <div>
          <button
            onClick={() => navigate(`/edit/${event.id}`)}
            style={{
              marginTop: "5px",
              marginRight: "6px",
              backgroundColor: "#4a5568",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Editar
          </button>

          <button
            onClick={() => deleteEvent(event.id)}
            style={{
              marginTop: "5px",
              backgroundColor: "#e53e3e",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Borrar
          </button>
        </div>

      </div>
        {/* IMAGEN situada a la derecha de la ficha */}
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "auto",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      )}

    </div>
  )
}

export default EventItem