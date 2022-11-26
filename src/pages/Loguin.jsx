import "../styles/Loguin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiUrlUsuario } from "../services/Api";
import axios from "axios";

const Loguin = () => {

  const navigate = useNavigate()

  const [Usuario, setUsuario] = useState({
    email:"",
    password:""
  })

  const manejadorSubmit = (e) => {
    e.preventDefault()
  }

  const manejadorChange = async (e) => {
    await setUsuario({...Usuario,[e.target.name]: e.target.value})
    /* console.log(Usuario) */
  }

  const manejadorBoton = () => {
    let url = ApiUrlUsuario
    axios.post(url, Usuario)
    .then(response => {
      console.log(response)
      console.log(Usuario)
      if (response.status === 200) {
        localStorage.setItem("token",response.data.token)
        /* console.log(localStorage.getItem("token")); */
        if (response.data.token === localStorage.getItem("token")) {
          navigate("/home")
        }
      }
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="outerContainer">
      <form onSubmit={manejadorSubmit} className="innerContainer">
        <div className="brand-title">Bienvenido al</div>
        <div className="brand-title">E-commers</div>
        <div className="inputs">
          <label>Ingrese su correo</label>
          <input type="email" required placeholder="Ejemplo@correo.com" name="email" onChange={manejadorChange}/>
          <label>Ingrese su contraseña</label>
          <input type="password" required placeholder="Minimo 6 caracteres" name="password" onChange={manejadorChange}/>
        </div>
        <button className="button1" type="submit" onClick={manejadorBoton}>ingresar</button>
        {/* <button className="button2" type="submit">registrarse</button> */}
      </form>
    </div>
  );
};

export default Loguin;
