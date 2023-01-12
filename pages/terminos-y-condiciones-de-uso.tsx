import Link from "next/link";
import React from "react";
import Spacer from "../components/Spacer";

const TerminosDeUso = () => {
  return (
    <div className="py-4 lg:py-6">
      <h1 className="header-medium lg:header azul">Términos y condiciones de uso</h1>
      <Spacer size={24} />
      <h2 className="sub-header gris">
        A continuación se presentan los términos y condiciones de uso de la página web de
        Zentradev
      </h2>
      <Spacer size={24} />
      <ul className="copy azul">
        <li>
          {"\u2022  "}
          Zentradev es un blog de salud mental y bienestar emocional que
          proporciona información y recursos para ayudar a nuestros lectores a
          mejorar su bienestar emocional.
        </li>
        <br />
        <li>
          {"\u2022  "}
          El contenido de Zentradev es solo para fines informativos y no debe
          utilizarse como sustituto del consejo médico o psicológico
          profesional.
        </li>
        <br />
        <li>
          {"\u2022 "}
          Zentradev no se hace responsable por la exactitud, integridad o
          actualidad del contenido del blog.
        </li>
        <br />
        <li>
          {"\u2022 "}
          No está permitido utilizar el contenido de Zentradev sin permiso previo
          y debidamente acreditado.
        </li>
        <br />
        <li>
          {"\u2022 "}
          Zentradev se reserva el derecho a cambiar, actualizar o eliminar
          cualquier contenido del blog sin previo aviso.
        </li>
        <br />
        <li>
          {"\u2022  "}
          Al utilizar Zentradev, acepta cumplir con todas las leyes y regulaciones
          aplicables.
        </li>
        <br />
        <li>
          {"\u2022  "}
          Zentradev se reserva el derecho a modificar estos términos y condiciones
          de uso en cualquier momento sin previo aviso. Al utilizar el blog
          después de cualquier cambio en los términos y condiciones de uso,
          acepta cumplir con dichos cambios.
        </li>
      </ul>
      <br />
      <p className="copy azul">
        Si tienes alguna pregunta o preocupación sobre nuestros términos y
        condiciones de uso, no dudes en ponerte en
        <Link href={"/contacto"}> contacto con nosotros.</Link>
      </p>
    </div>
  );
};

export default TerminosDeUso;