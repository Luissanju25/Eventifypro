//Pagina encargada para la creacion y edicion de los eventos
//Es reutilizada para ambas acciones, para el caso de edicion contiene los datos del evento 

import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { EventsContext } from '../context/EventsContext'
import Event from '../models/Event'

function Create() {
  // Obtener id de la URL (para saber si estamos editando)
  const { id } = useParams()

  // Contexto global
  const { events, addEvent, updateEvent } = useContext(EventsContext)

  // Estado del formulario
  const [form, setForm] = useState({//contiene los datos actuales y permite actualizar
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

   /**
   * onChange detecta cambios
   * y actualiza el estado del formulario.
   */

  // Manejo de cambios en inputs
  const handleChange = (e) => {
     setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // Envío del formulario
  const handleSubmit = (e) => {
  e.preventDefault()//Evita la recarga de la pagina

  // Validación título
  if (!form.title.trim()) {
    alert("El título es obligatorio")
    return
  }

  // Validación ubicación
  if (!form.location.trim()) {
    alert("La ubicación es obligatoria")
    return
  }

  // Validación fecha
  if (!form.date) {
    alert("La fecha es obligatoria")
    return
  }

  // Validación categoría
  if (!form.category) {
    alert("Debes seleccionar una categoría")
    return
  }

  // Validación precio
  if (form.price < 0) {
    alert("El precio no puede ser negativo")
    return
  }

  // Validación descripción
  if (form.description.length < 10) {
    alert("La descripción debe tener al menos 10 caracteres")
    return
  }

  // Validación imagen
  if (form.image && !form.image.startsWith("http")) {
    alert("La imagen debe ser una URL válida")
    return
  }

  try {
    if (id) {
      // Editar evento
      updateEvent(form)
      alert("Evento actualizado correctamente")
    } else {

      // Crear nuevo evento
      const newEvent = new Event({
        ...form,
        id: Date.now()
      })

      addEvent(newEvent)

      // Limpiar formulario
      setForm({
        title: '',
        description: '',
        date: '',
        location: '',
        category: '',
        price: '',
        image: ''
      })

      alert("Evento creado correctamente")
    }

  } catch (error) {
    console.error("Error al guardar evento:", error)

    alert("Ha ocurrido un error")
  }
}

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      {/* Título dinámico */}
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

        <select name="category" value={form.category} onChange={handleChange}>
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
          value={form.image}
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