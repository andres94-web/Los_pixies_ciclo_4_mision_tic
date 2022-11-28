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
      <div class="background">
        <Navbar />
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <form
              action=""
              method="post"
              class="screen-body"
              ref={form}
              onSubmit={sendEmail}
            >
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>targeta de</span>
                  <span>contacto</span>
                </div>
                <div class="app-contact">Contactarse al: +57 ##########</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" name="user_name" placeholder="Nombre" />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control" name="user_email"
                      placeholder="Correo electronico"
                    />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="Mensaje" name="message"/>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">Enviar</button>
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
