/**Gestiona el estado global de la aplicacion 
 * Donde se alamacenan los eventos, se aplican los filtros y se implementa 
 * la persistencia de datos utilizando LocalStorage
 */

import { createContext, useState, useEffect } from 'react'

// Crear contexto global
export const EventsContext = createContext()

export const EventsProvider = ({ children }) => {

  // Estado principal de eventos cargandolo desde LocalStorage
const [events, setEvents] = useState(() => {
  const stored = localStorage.getItem("events")
  return stored ? JSON.parse(stored) : []
})
  // Estados para los diferentes filtros
  const [filter, setFilter] = useState("Todos")
  const [yearFilter, setYearFilter] = useState("Todos")

  //Encargado de guardar los eventos en localStorage
useEffect(() => {
  localStorage.setItem("events", JSON.stringify(events))
}, [events])

  // Crear evento
  const addEvent = (newEvent) => {
    setEvents(prev => [...prev, newEvent])
  }

  // Borrar evento
  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id))
  }

  // Actualizar evento (EDITAR)
  const updateEvent = (updatedEvent) => {
    setEvents(prev =>
      prev.map(e => e.id === updatedEvent.id ? updatedEvent : e)
    )
  }

  // Filtrado combinado (categoría + año)
  const filteredEvents = events.filter(e => {
    const matchCategory = filter === "Todos" || e.category === filter

    const eventYear = new Date(e.date).getFullYear().toString()
    const matchYear = yearFilter === "Todos" || eventYear === yearFilter

    return matchCategory && matchYear
  })

  // Datos y funciones que compartimos globalmente
  return (
    <EventsContext.Provider value={{
      events: filteredEvents,
      addEvent,
      deleteEvent,
      updateEvent, 
      setFilter,
      filter,
      setYearFilter,
      yearFilter
    }}>
      {children}
    </EventsContext.Provider>
  )
}