import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Contacto.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0y5fywh",
        "template_qupspea",
        form.current,
        "GQSYWCAZuF69eoLnl"
      )
      .then(
        (result) => {
          alert(
            `${result.text}  Su mensaje a sido enviado con exito, me comunicare con ustedes lo mas pronto posible`
          );
        },
        (error) => {
          alert(
            `Ha ocurrido un error de tipo ${error.text} Andres94-web estara trabajando para solucionarlo`
          );
        }
      );
  };

  return (
    <>
      <div className="background">
        <Navbar />
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <form
              action=""
              method="post"
              className="screen-body"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>targeta</span>
                  <span>de contacto</span>
                </div>
                <div className="app-contact">Contactarse al: +57 ##########</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" name="user_name" placeholder="Nombre" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control" name="user_email"
                      placeholder="Correo electronico"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="Mensaje" name="message"/>
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
