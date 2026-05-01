//Representacion de la pagina principal
//Mostraremos la lista de eventos y podremos aplica el filtro por año 

import { useContext } from 'react'
import { EventsContext } from '../context/EventsContext'
import EventList from '../components/EventList'

function Home() {
  //accedemos al contexto global que nos indica el estado actual
  const { events, setYearFilter, yearFilter } = useContext(EventsContext)

  //siempre tendremos el filtro de años desde 2019 al año actual
  const currentYear = new Date().getFullYear()
  const years = []

  for (let i = currentYear; i >= 2019; i--) {
    years.push(i)
  }

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto" }}>
      <h1>Lista de eventos</h1>

      {/* FILTRO POR AÑO */}
      <select
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
        style={{ marginBottom: "15px", padding: "5px" }}
      >
        <option value="Todos">Todos los años</option>

        {/* Generacion dinamica de años */}
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* LISTA DE EVENTOS */}
      <EventList events={events} />
    </div>
  )
}

export default Home