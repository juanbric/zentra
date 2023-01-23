import MetaTag from "../components/MetaTag";
import { HStack, Stack, VStack } from "@chakra-ui/react";
import Spacer from "../components/Spacer";
import Image from "next/image";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

export const Nosotros = () => {
  return (
    <VStack>
      <MetaTag
        title={"Sobre nosotros | Zentra Dev"}
        description={
          "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
      <section className="py-4 text-center">
        <HStack className="header lg:pt-[150px]">
          <div className="rounded-full p-6 mr-2 mt-1 bg-azul" />
          <div className="verde">Sobre nosotros</div>
          <Spacer size={24} />
        </HStack>
        <Spacer size={8} />
        <p className="sub-header-tiny">
          Innovadores, flexibles, y multidisciplinarios
        </p>
      </section>

      <div className="grid grid-cols-1 lg:pt-[150px] md:grid-cols-2 gap-4">
        <div>
          <HStack className="header ">
            <div className="rounded-full p-6 mt-1 bg-azul" />
            <div className="verde">zentradev</div>
          </HStack>
          <Spacer size={8} />
          <p className="sub-header-tiny">
            Trabajemos juntos y con dedicación para superar las expectativas de
            nuestros clientes y lograr resultados sobresalientes
          </p>
          <p className="header-tiny-bold azul pt-2">
            Juan Briceno — Co-Fundador de zentradev
          </p>
        </div>
        <p>está aquí para ayudarlo a alcanzar sus metas, desde la creación de un sitio web profesional hasta la optimización de su presencia en línea para atraer más clientes y ganar más dinero. Trabajaremos con usted para asegurar que su sitio web sea fácil de usar y entender, y nos aseguraremos de que se ajuste a su presupuesto. ¡Contáctenos hoy para obtener más información sobre cómo podemos ayudarlo a alcanzar sus metas!</p>
        <p className="card-form copy">
          Somos una agencia de desarrollo web comprometidos a proporcionar a
          nuestros clientes productos y servicios de alta calidad a un precio
          competitivo. Ofrecemos una amplia gama de servicios a nuestros
          clientes, desde diseño y desarrollo de sitios web personalizados hasta
          soluciones de comercio electrónico. Estamos equipados para manejar
          todas sus necesidades de tecnología de la información.
        </p>
        <p className="card-form copy">
          Nuestro equipo está compuesto por desarrolladores altamente
          calificados y experimentados que están al día con las últimas
          tecnologías y tendencias del mercado.
        </p>
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
      </div>
      <Spacer size={32} />
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
        <p>Las Palmas de Gran Canaria</p>
        <p>España</p>
      </a>
    </VStack>
  );
};
export default Nosotros;
