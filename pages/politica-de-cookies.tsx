import Link from "next/link";
import React from "react";
import Spacer from "../components/Spacer";

const PoliticaCookies = () => {
  return (
    <div className="py-4 lg:py-6">
      <h1 className="header-medium lg:header azul">Política de cookies</h1>
      <Spacer size={24} />
      <p className="copy">
        Una política de cookies es un documento que describe cómo se utilizan
        las cookies en un sitio web. Las cookies son pequeños archivos de datos
        que se almacenan en el navegador del usuario y se utilizan para rastrear
        y almacenar información sobre el usuario y su uso del sitio web.
      </p>
      <Spacer size={24} />
      <h2 className="sub-header gris">
        A continuación se presenta la política de cookies de Zentradev
      </h2>
      <Spacer size={24} />
      <ul className="copy azul">
        <li>
          {"\u2022  "}
          Zentradev utiliza cookies para mejorar la experiencia del usuario y
          hacer que nuestro sitio sea más eficiente.
        </li>
        <br />
        <li>
          {"\u2022  "}
          Al utilizar Zentradev, acepta nuestro uso de cookies de acuerdo con esta
          política.
        </li>
        <br />
        <li>
          {"\u2022 "}
          Las cookies no recopilan información personal identificable.
        </li>
        <br />
        <li>
          {"\u2022 "}
          Puede configurar su navegador para aceptar o rechazar cookies o para
          que le avise cuando se envían cookies. Si elige rechazar las cookies,
          es posible que algunas partes de Zentradev no funcionen correctamente.
        </li>
        <br />
        <li>
          {"\u2022 "}
          Zentradev se reserva el derecho a modificar esta política de cookies en
          cualquier momento sin previo aviso. Al utilizar el blog después de
          cualquier cambio en la política de cookies, acepta cumplir con dichos
          cambios.
        </li>
      </ul>
      <br />
      <p className="copy azul">
        Si tienes alguna pregunta o preocupación sobre nuestra política de
        cookies, no dudes en ponerte en
        <Link href={"/contacto"}> contacto con nosotros.</Link>
      </p>
    </div>
  );
};

export default PoliticaCookies;