// Este archivo simula una API local de eventos.
// Inicialmente se utilizaba para cargar datos de prueba,
// pero ha sido sustituido por localStorage para persistencia real.

// Actualmente se ha adaptado para trabajar con localStorage,
// permitiendo persistencia de datos en el navegador.

//  Aunque la aplicación ahora usa Context API directamente,
// este archivo demuestra la evolución del proyecto hacia un modelo tipo backend.

//Datos iniciales de ejemplo
const events = [
  {
    id: 1,
    title: "Concierto de Rock",
    description: "Gran concierto en vivo",
    date: "2026-06-10",
    location: "Madrid",
    category: "Música",
    price: 25
  },
  {
    id: 2,
    title: "Feria Tecnológica",
    description: "Innovaciones del futuro",
    date: "2026-07-15",
    location: "Barcelona",
    category: "Tecnología",
    price: 10
  }
]

// Simula llamada a API
export const getEvents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {

      //Intentamos recuperar eventos del localStorage
      const storedEvents = JSON.parse(localStorage.getItem("events"))

      //Si existen datos guardados usamos esos si no 
      if (storedEvents && storedEvents.length > 0) {
        resolve(storedEvents)
      } else {
        resolve(events) // los iniciales
      }
    }, 500)
  })
}

//Obtener un evento por su id
export const getEventById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const storedEvents = JSON.parse(localStorage.getItem("events")) || []
      const allEvents = storedEvents.length > 0 ? storedEvents : events

      const event = allEvents.find(e => e.id === parseInt(id))

      if (event) {
        resolve(event)
      } else {
        reject("Evento no encontrado")
      }
    }, 500)
  })
}

// Simula guardar un evento
export const saveEvent = async (newEvent) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || []

      const updatedEvents = [...storedEvents, newEvent]

      localStorage.setItem("events", JSON.stringify(updatedEvents))

      resolve(newEvent)
    }, 500)
  })
}