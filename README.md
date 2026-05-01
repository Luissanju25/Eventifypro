# Eventifypro - Luis Sanjuan Diaz

La motivación de este proyecto reside en mi actual actividad laboral que se realiza en una empresa encargada del montaje de todo tipo de logística para eventos, éste incluye todo lo necesario desde la iluminación, el sonido, la imagen y el montaje de estructuras. 

Durante muchos años hemos realizado diferentes eventos, pero año tras año son muchos los que se suelen realizar de manera repetitiva al tratarse contratos de larga duración. Es por ello que veía una oportunidad llevar cierto control de esos eventos, ayudándonos de la fecha el tipo de evento con su pequeña descripción y acompañado de imágenes tanto del propio evento como planos explicativos. 

Serviría como herramienta tanto a los empleados más veteranos como a los nuevos integrantes del equipo que llegarían a los montajes con una idea más clara de como ha de ser el resultado final. 


## Descripción del proyecto

La aplicación funciona completamente en el cliente y permite:

- Crear eventos personalizados
- Añadir información detallada (título, fecha, ubicación, precio, descripción e imagen)
- Visualizar eventos en formato lista
- Acceder a una vista detallada de cada evento
- Filtrar eventos por categoría y año
- Editar y eliminar eventos existentes
- Mantener los datos guardados incluso al cerrar la aplicación

El objetivo del proyecto es aplicar los conocimientos de React vistos durante el curso en una aplicación real, estructurada y funcional.

---

## Tecnologías utilizadas

- React (con Vite)
- JavaScript (ES6+)
- React Router DOM (navegación entre vistas)
- Context API (gestión de estado global)
- LocalStorage (persistencia de datos)
- HTML + CSS (estilos)

---

## Estructura del proyecto

El proyecto está organizado de forma modular:

- `/components → Componentes reutilizables (EventItem, Sidebar, Navbar, etc.)
- `/pages → Vistas principales (Home, Create, Detail, NotFound)
- `/context → Gestión del estado global (EventsContext)
- `/hooks → Hooks personalizados (useEvents)
- `/api → Simulación de llamadas asíncronas
- `/models → Clase Event (POO)

---

## Funcionalidades principales

# Gestión de eventos
- Crear eventos mediante formulario
- Editar eventos existentes
- Eliminar eventos

# Filtrado
- Filtrado por categoría (Sidebar)
- Filtrado por año (selector dinámico)

# Navegación
- Página principal
- Vista detalle
- Formulario de creación/edición
- Página de error (404)

# Imágenes
- Posibilidad de añadir una imagen mediante URL
- Vista previa en listado y detalle

# Persistencia de datos
- Uso de localStorage para guardar eventos
- Los datos se mantienen tras recargar o cerrar la aplicación

---

## Instrucciones de ejecución

1. Clonar el repositorio:
```bash
2. git clone <URL_DEL_REPOSITORIO>
3. cd eventifypro 
5. npm install -- instalación de dependencias
6. npm run dev -- ejecución de la aplicación 
