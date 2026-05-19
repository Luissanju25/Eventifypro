//Componente encargado de representar la barra de navegación superior
//Incluimos el logo de la aplicacion y los botones a las respectivas rutas

import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {

    const exportJSON = () => {

    // Obtener eventos actuales
    const events = localStorage.getItem("events")

    // Crear archivo tipo JSON
    const blob = new Blob(
      [events],
      { type: "application/json" }
    )

    // Crear URL temporal
    const url = URL.createObjectURL(blob)

    // Crear enlace invisible
    const a = document.createElement("a")

    a.href = url
    a.download = "events.json"

    // Lanzar descarga
    a.click()

    // Liberar memoria
    URL.revokeObjectURL(url)
  }

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#3032af",
      color: "white"
    }}>
      {/* Logo y nombre de la APP */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        
        <img
          src={logo} alt="logo"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain"
          }}
        />
        <h2 style={{ margin: 0 }}>EventifyPro</h2>

      </div>


      {/* Botones inicio y creación de listas */}
      <div style={{ display: "flex", gap: "10px" }}>
  
      <Link to="/" style={{
        textDecoration: "none",
        padding: "6px 12px",
        borderRadius: "6px",
        color: "white",
        backgroundColor: "rgba(14, 13, 13, 0.36)",
        transition: "0.2s"
      }}
      //Estilos dinamicos para los botones
      onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.25)"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
      >
        Inicio
      </Link>

      <Link to="/create" style={{
        textDecoration: "none",
        padding: "6px 12px",
        borderRadius: "6px",
        color: "white",
        backgroundColor: "#38a169",
        transition: "0.2s"
      }}
      
      onMouseEnter={(e) => e.target.style.backgroundColor = "#2f855a"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#38a169"}
      >
        Crear Evento
      </Link>

      {/* Exportar JSON */}
        <button

          onClick={exportJSON}

          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#718096",
            color: "white",
            cursor: "pointer",
            transition: "0.2s"
          }}

          onMouseEnter={(e) => e.target.style.backgroundColor = "#4a5568" }
          onMouseLeave={(e) => e.target.style.backgroundColor = "#718096" }
        >

          Exportar JSON

        </button>

    </div>
    </nav>
  )
}

export default Navbar