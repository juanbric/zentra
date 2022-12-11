import BotonLink from "../components/Boton";
import MetaTag from "../components/MetaTag";
import { VStack } from "@chakra-ui/react";
import Spacer from "../components/Spacer";
import Image from "next/image";

export const Nosotros = () => {
  return (
    <VStack>
      <MetaTag
        title={"Sobre nosotros | Zentra Dev"}
        description={
          "ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"/logo.png"}
      />
      <h1 className="header-bold text-center">Zentra Dev</h1>
      <Spacer size={8} />
      <p className="header-light text-center">Agencia de Desarrollo Web</p>
      <Spacer size={24} />
      <p className="card-form copy">
        Somos una agencia de desarrollo web comprometidos a proporcionar a
        nuestros clientes productos y servicios de alta calidad a un precio
        competitivo. Ofrecemos una amplia gama de servicios a nuestros clientes,
        desde diseño y desarrollo de sitios web personalizados hasta soluciones
        de comercio electrónico, estamos equipados para manejar todas sus
        necesidades de tecnología de la información.
      </p>
      <p className="card-form copy">
        Nuestro equipo está compuesto por desarrolladores altamente calificados
        y experimentados que están al día con las últimas tecnologías y
        tendencias del mercado.
      </p>
      <section className="py-4 text-center">
        <a
          href="https://www.linkedin.com/in/juanpablobriceno/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/juan.jpg"
            width="250"
            height="250"
            alt="Juan Pablo Briceno"
            className="rounded-full py-2"
          />
          <p>Juan Pablo Briceno</p>
          <p>Director - Zentra Dev</p>
          <p>Las Palmas de Gran Canaria, España</p>
        </a>
      </section>
      <p className="card-form copy">
        Ofrecemos un servicio de consultoría personalizada para ayudar a
        nuestros clientes a identificar sus necesidades y desarrollar una
        solución tecnológica que cumpla con sus objetivos y requerimientos.
      </p>
      <p className="card-form copy">
        También ofrecemos soporte técnico y mantenimiento regular para
        asegurarnos de que sus sistemas siempre estén funcionando de manera
        óptima.
      </p>
      <Spacer size={24} />
      <BotonLink
        link={"/nosotros"}
        mensaje={"Lee más sobre nuestros servicios"}
      />
    </VStack>
  );
};
export default Nosotros;