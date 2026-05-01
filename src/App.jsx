/**Definimos la estructura principal de la aplicacion
 * configuracion de las rutas (React Router) y la distribucion general
 * y para la interfaz comun : nabar, sidebar, footer
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Componentes del layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
//Paginas principales con la que cuenta el proyecto
import Home from './pages/Home'
import Create from './pages/Create'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación superior */}
      <Navbar />
      <div style={{ display: "flex" }}>
         {/* Menu lateral de categorias */}
        <Sidebar />

         {/* Contenido dinamico del centro que va cambiando */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/event/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

       {/* Pie de pagina */}
      <Footer />
    </BrowserRouter>
  )
}

export default App