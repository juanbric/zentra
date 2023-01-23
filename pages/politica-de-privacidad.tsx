import Link from "next/link";
import React from "react";
import Spacer from "../components/Spacer";

const PoliticaPrivacidad = () => {
  return (
    <div className="py-4 lg:py-6">
        <h1 className="header-medium lg:header azul">Política de privacidad</h1>
        <Spacer size={24} />
        <h2 className="sub-header gris">
          Para proteger la privacidad de nuestros visitantes, en Zentradev hemos
          desarrollado la siguiente política de privacidad
        </h2>
        <Spacer size={24} />
        <ul className="copy azul">
          <li>
            {"\u2022  "}
            Recopilamos solo la información necesaria para proporcionar una
            experiencia de lectura óptima. Esto incluye datos demográficos y
            preferencias de lectura.
          </li>
          <br />
          <li>
            {"\u2022  "}
            No compartimos ni vendemos la información de nuestros lectores a
            terceros.
          </li>
          <br />
          <li>
            {"\u2022 "}
            Utilizamos medidas de seguridad para proteger la información de
            nuestros lectores contra el acceso no autorizado.
          </li>
          <br />
          <li>
            {"\u2022 "}
            Proporcionamos opciones para que nuestros lectores puedan controlar
            cómo compartimos su información.
          </li>
          <br />
          <li>
            {"\u2022 "}
            Respetamos la privacidad de nuestros lectores y tomamos medidas para
            garantizar que sus datos personales sean tratados de manera segura y
            confidencial.
          </li>
          <br />
          <li>
            {"\u2022  "}
            Actualizamos regularmente esta política de privacidad para reflejar
            cualquier cambio en nuestras prácticas de recopilación y uso de
            información.
          </li>
          <br />
        </ul>
        <p className="copy azul">
          Si tienes alguna pregunta o preocupación sobre nuestra política de
          privacidad, no dudes en ponerte en
          <Link href={"/contacto"}> contacto con nosotros.</Link>
        </p>
    </div>
  );
};

export default PoliticaPrivacidad;