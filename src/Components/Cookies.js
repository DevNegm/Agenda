import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <div className="main container">
      <Link
        to="/"
        className=" fs-5 primary-color text-decoration-none my-3 d-block"
        style={{ width: "fit-content" }}
      >
        <BsArrowLeft size={30} /> Back
      </Link>
      <div className="row p-md-5  rounded-3 anime bg-light my-3">
        <div className="col-md-12">
          <h1>Política de cookies</h1>
          <p>
            ¿Qué son las cookies? Una cookie es un fichero que se descarga en su
            ordenador al acceder a determinadas páginas web. Las cookies
            permiten a una página web, entre otras cosas, almacenar y recuperar
            información sobre los hábitos de navegación de un usuario o de su
            equipo y, dependiendo de la información que contengan y de la forma
            en que utilice su equipo, pueden utilizarse para reconocer al
            usuario. ¿Qué tipos de cookies utiliza esta página web?
          </p>
          <br />
          <ul>
            <li>
              • • Cookies té cnicas: Son aquéllas que permiten al usuario la
              navegación a través de una página web, plataforma o aplicación y
              la utilización de las diferentes opciones o servicios que en ella
              existan como, por ejemplo, controlar el tráfico y la comunicación
              de datos, identificar la sesión, acceder a partes de acceso
              restringido, recordar los elementos que integran un pedido,
              realizar el proceso de compra de un pedido, realizar la solicitud
              de inscripción o participación en un evento, utilizar elementos de
              seguridad durante la navegación, almacenar contenidos para la
              difusión de videos o sonido o compartir contenidos a través de
              redes sociales.
            </li>
            <br />
            <li>
              • • Cookies de personalizació n: Son aquéllas que permiten al
              usuario acceder al servicio con algunas características de
              carácter general predefinidas en función de una serie de criterios
              en el terminal del usuario como por ejemplo serian el idioma, el
              tipo de navegador a través del cual accede al servicio, la
              configuración regional desde donde accede al servicio, etc.
            </li>
            <br />
            <li>
              • • Cookies de aná lisis: Son aquéllas que permiten al responsable
              de las mismas, el seguimiento y análisis del comportamiento de los
              usuarios de los sitios web a los que están vinculadas. La
              información recogida mediante este tipo de cookies se utiliza en
              la medición de la actividad de los sitios web, aplicación o
              plataforma y para la elaboración de perfiles de navegación de los
              usuarios de dichos sitios, aplicaciones y plataformas, con el fin
              de introducir mejoras en función del análisis de los datos de uso
              que hacen los usuarios del servicio.
            </li>
            <br />
            <li>
              • • Cookies de aná lisis: Son aquéllas que permiten al responsable
              de las mismas, el seguimiento y análisis del comportamiento de los
              usuarios de los sitios web a los que están vinculadas. La
              información recogida mediante este tipo de cookies se utiliza en
              la medición de la actividad de los sitios web, aplicación o
              plataforma y para la elaboración de perfiles de navegación de los
              usuarios de dichos sitios, aplicaciones y plataformas, con el fin
              de introducir mejoras en función del análisis de los datos de uso
              que hacen los usuarios del servicio. En algunos navegadores puede
              configurar reglas para administrar cookies por sitio, lo que le
              ofrece un control más preciso sobre su privacidad. Esto significa
              que puede inhabilitar cookies de todos los sitios salvo de
              aquellos en los que confíe. Por tanto, usted puede permitir,
              bloquear o eliminar las cookies instaladas en su equipo mediante
              la configuración de las opciones del navegador instalado en su
              ordenador: • • Para más información sobre Navegador Chrome pulse
              aquí. • • Para más información sobre Navegador Mozilla Firefox
              pulse aquí. • • Para más información sobre Navegador Internet
              Explorer pulse aquí. Otra de las funciones de todos los
              navegadores es el modo incó gnito o navegació n privada. Puede
              navegar en modo de incó gnito cuando no quiera que sus visitas a
              sitios web o sus descargas se registren en los historiales de
              navegació n y descargas. Las cookies creadas en modo de incó gnito
              se eliminan despué s de cerrar todas las ventanas de incó gnito.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
