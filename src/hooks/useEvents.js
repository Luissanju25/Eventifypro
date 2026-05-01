// Este custom hook se diseñó inicialmente para obtener eventos desde una API simulada.
// Utiliza useEffect para cargar los datos de forma asíncrona.

// Actualmente no se utiliza en la aplicación final,
// ya que los eventos se gestionan mediante Context API y localStorage,
// lo que permite un control global del estado y persistencia de datos.

// Importación de hooks de React
import { useState, useEffect } from 'react'

// Función simulada de API
import { getEvents } from '../api/events'

// Estado local de eventos
export const useEvents = () => {
  const [events, setEvents] = useState([])

// Carga inicial de datos
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await getEvents()
        setEvents(data)
      } catch (error) {
        console.error("Error cargando eventos", error)
      }
    }

    loadEvents()
  }, [])

// Retornamos los eventos
  return { events }
}