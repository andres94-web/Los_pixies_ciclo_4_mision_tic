import { useNavigate } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {

  const navigate = useNavigate()

  const manejadorContacto = (e) => {
    e.preventDefault()
    if (localStorage.getItem("token")) {
      navigate("/contacto")
    }
  }

  const manejadorProductos = (e) => {
    e.preventDefault()
    if (localStorage.getItem("token")) {
      navigate("/productos")
    }
  }

  const manejadorHome = (e) => {
    e.preventDefault()
    if (localStorage.getItem("token")) {
      navigate("/home")
    }
  }

  const manejadorSesion = (e) => {
    e.preventDefault()
    if (localStorage.getItem("token")) {
      navigate("/")
    }
  }

  return (
    <details>
      <summary></summary>
      <nav className="menu">
        <a onClick={manejadorHome} href="">Home</a>
        <a onClick={manejadorProductos} href="">Productos</a>
        <a onClick={manejadorContacto} href="">Contacto</a>
        <a onClick={manejadorSesion} href="">Cerrar sesion</a>
      </nav>
    </details>
  )
}

export default Navbar