//Pagina encargada para la creacion y edicion de los eventos
//Es reutilizada para ambas acciones, para el caso de edicion contiene los datos del evento 

import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { EventsContext } from '../context/EventsContext'
import { saveEvent } from '../api/events'
import Event from '../models/Event'

function Create() {
  // Obtener id de la URL (para saber si estamos editando)
  const { id } = useParams()

  // Contexto global
  const { events, addEvent, updateEvent } = useContext(EventsContext)

  // Estado del formulario
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: '',
    price: '',
    image: ''
  })

  // Si hay id → cargar datos del evento para editar
  useEffect(() => {
    if (id) {
      const eventToEdit = events.find(e => e.id === Number(id))
      if (eventToEdit) {
        setForm(eventToEdit)
      }
    }
  }, [id, events])

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // Envío del formulario (crear o editar)
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación básica
    if (!form.title || !form.date || !form.location) {
      alert("Todos los campos obligatorios deben rellenarse")
      return
    }

    try {
      if (id) {
        // EDITAR evento
        updateEvent(form)
        alert("Evento actualizado correctamente")
      } else {
        // CREAR evento
        const newEvent = new Event({
          ...form,
          id: Date.now()
        })

        await saveEvent(newEvent)
        addEvent(newEvent)
        alert("Evento creado correctamente")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h1>{id ? "Editar evento" : "Crear evento"}</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Ubicación"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange}>
          <option value="">Selecciona categoría</option>

          <option value="Orquesta">Orquesta</option>
          <option value="Banda">Banda</option>

          <option value="Carreras">Carreras</option>
          <option value="Polideportivo">Polideportivo</option>

          <option value="Musical">Musical</option>
          <option value="Obra Teatral">Obra Teatral</option>

          <option value="Moros y Cristianos">Moros y Cristianos</option>
          <option value="Presentaciones">Presentaciones</option>
        </select>

        <input
          name="price"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="URL de la imagen"
          onChange={handleChange}
        />

        <button type="submit">
          {id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  )
}

export default Create