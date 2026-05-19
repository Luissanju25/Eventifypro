// Contexto global para gestionar los eventos de la aplicación.
// Centraliza el estado y evita pasar props entre componentes.

import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// Crear contexto
export const EventsContext = createContext()

export const EventsProvider = ({ children }) => {

  /**
   * Estado principal de eventos.
   * 
   * useLocalStorage mantiene
   * persistencia automática.
   */
  const [events, setEvents] = useLocalStorage("events", [])

  // Filtros
  const [filter, setFilter] = useState("Todos")
  const [yearFilter, setYearFilter] = useState("Todos")

  // CARGA INICIAL DESDE events.JSON usando fetch + async/await
  useEffect(() => {

    const loadEvents = async () => {

      // Solo cargar si localStorage está vacío
      if (events.length === 0) {

        try {
          const res = await fetch('/events.json')
          if (!res.ok) {
            throw new Error("Error cargando eventos")
          }
          //convertir respuesta en JSON
          const data = await res.json()
          //guardamos eventos en estado
          setEvents(data)

        } catch (error) {
          console.error(
            "Error obteniendo eventos iniciales:",
            error
          )
        }
      }
    }

    loadEvents()

  }, [])


  // Crear evento
  const addEvent = (newEvent) => {
    setEvents(prev => [...prev, newEvent])
  }

  // Borrar evento
  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id))
  }

  // Actualizar evento
  const updateEvent = (updatedEvent) => {
    setEvents(prev =>
      prev.map(e => e.id === updatedEvent.id ? updatedEvent : e)
    )
  }

  // Filtrado por categoría + año
  const filteredEvents = events.filter(e => {
    const matchCategory = filter === "Todos" || e.category === filter

    //Obtiene año del evento
    const eventYear = new Date(e.date).getFullYear().toString()
    const matchYear = yearFilter === "Todos" || eventYear === yearFilter

    return matchCategory && matchYear
  })

  /**
   * Compartimos estado y funciones
   * con toda la aplicación.
   */
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