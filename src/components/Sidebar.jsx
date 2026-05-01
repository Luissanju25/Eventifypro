//Componente para mostrar el menu lateral de categorias
//Permitiendo filtrar los eventos por subcategorias

import { useContext } from 'react'
import { EventsContext } from '../context/EventsContext'

function Sidebar() {
  const { setFilter, filter } = useContext(EventsContext)

  const handleClick = (category) => {
    setFilter(category)
  }
  //Estilos para todos los elementos 
  const baseStyle = {
    cursor: "pointer",
    margin: "5px 0"
  }
  //Estilo para especificar la categoria activada
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: "3px 6px",
    borderRadius: "5px"
  }

  return (
    <div style={{ width: "200px", padding: "10px", backgroundColor: "#f0f0f0" }}>

      <h3>Categorías</h3>

      {/* TODOS */}
      <p
        onClick={() => handleClick("Todos")}
        style={{
          ...baseStyle,
          ...(filter === "Todos" ? activeStyle : {})
        }}
      >
        Todos
      </p>

      {/* CONCIERTOS */}
      <p style={{ textDecoration: "underline" }}>Conciertos</p>
      <p onClick={() => handleClick("Orquesta")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Orquesta" ? activeStyle : {}) }}>Orquesta</p>
      <p onClick={() => handleClick("Banda")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Banda" ? activeStyle : {}) }}>Banda</p>

      {/* DEPORTES */}
      <p style={{ textDecoration: "underline" }}>Deportes</p>
      <p onClick={() => handleClick("Carreras")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Carreras" ? activeStyle : {}) }}>Carreras</p>
      <p onClick={() => handleClick("Polideportivo")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Polideportivo" ? activeStyle : {}) }}>Polideportivo</p>

      {/* TEATRO */}
      <p style={{ textDecoration: "underline" }}>Teatro</p>
      <p onClick={() => handleClick("Musical")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Musical" ? activeStyle : {}) }}>Musical</p>
      <p onClick={() => handleClick("Obra Teatral")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Obra Teatral" ? activeStyle : {}) }}>Obra Teatral</p>

      {/* FIESTAS */}
      <p style={{ textDecoration: "underline" }}>Fiestas Patronales</p>
      <p onClick={() => handleClick("Moros y Cristianos")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Moros y Cristianos" ? activeStyle : {}) }}>Moros y Cristianos</p>
      <p onClick={() => handleClick("Presentaciones")} style={{ ...baseStyle, marginLeft: "10px", ...(filter === "Presentaciones" ? activeStyle : {}) }}>Presentaciones</p>

    </div>
  )
}

export default Sidebar