/**
 * Simulación de API local.
 * 
 * Este archivo fue utilizado en una fase inicial
 * del proyecto para simular un pequeño backend.
 * 
 * Permitía:
 * - Obtener eventos
 * - Buscar eventos por id
 * - Guardar eventos
 * 
 * usando:
 * - Promises
 * - async/await
 * - localStorage
 * 
 * Actualmente la aplicación utiliza Context API
 * como arquitectura principal, por lo que este
 * archivo ya no participa directamente en el flujo
 * principal de la aplicación.
 * 
 * Se mantiene como ejemplo de evolución del proyecto
 * hacia una estructura similar a una API real.
 */

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

/**
 *  Simula guardar un evento
 * en un backend.
 * 
 * Funcionamiento:
 * 1. Recupera eventos actuales.
 * 2. Añade el nuevo evento.
 * 3. Guarda el nuevo array en localStorage.
 */
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