//Componente encargado de representar la barra de navegación superior
//Incluimos el logo de la aplicacion y los botones a las respectivas rutas

import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
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

    </div>
    </nav>
  )
}

export default Navbar