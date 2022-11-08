import "../styles/Loguin.css";

const Loguin = () => {
  return (
    <div className="outerContainer">
      <form className="innerContainer">
        <div className="brand-title">Bienvenido al</div>
        <div className="brand-title">E-commers</div>
        <div className="inputs">
          <label>Email</label>
          <input type="email" required placeholder="Ejemplo@correo.com" />
          <label>Password</label>
          <input type="password" required placeholder="Minimo 6 caracteres" />
          
        </div>
        <button className="button1" type="submit">ingresar</button>
        <button className="button2" type="submit">registrarse</button>
      </form>
    </div>
  );
};

export default Loguin;
