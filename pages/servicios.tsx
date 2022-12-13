import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";
import { VStack } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Diseño y desarrollo de sitios web personalizados",
    descritpion:
      "Creación de sitios web atractivos y fáciles de usar que se ajusten a las necesidades y objetivos específicos de cada cliente.",
  },
  {
    title: "Consultoría tecnológica",
    descritpion:
      "Asesoramiento a los clientes sobre cómo utilizar al mejor la tecnología en sus negocios.",
  },
  {
    title: "Soporte técnico y mantenimiento",
    descritpion:
      "Proporcionar asistencia técnica a los clientes y realizar tareas de mantenimiento regular para asegurar el correcto funcionamiento de los sistemas.",
  },
  {
    title: "Formación y capacitación",
    descritpion:
      "Proporcionar a los clientes y su equipo las habilidades y conocimientos necesarios para utilizar eficientemente la tecnología en su negocio.",
  },
  {
    title: "Optimización de motores de búsqueda (SEO)",
    descritpion:
      "Mejora de la visibilidad de un sitio web en los resultados de búsqueda de Google y otros motores de búsqueda.",
  },
  {
    title: "Soluciones de comercio electrónico",
    descritpion:
      "Desarrollo de plataformas de comercio electrónico que permitan a los clientes vender sus productos o servicios en línea de manera efectiva.",
  },
  {
    title: "Diseño gráfico",
    descritpion:
      "Creación de diseños atractivos y coherentes para elementos como logotipos, tarjetas de visita, folletos y otros materiales de marketing.",
  },
];

export const Servicios = () => {
  return (
    <VStack>
      <MetaTag
        title={"Nuestros servicios | Zentra Dev"}
        description={
          "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
      <Banner
        img={"/servicios.png"}
        copy={
          "Creamos páginas informativas, corporativas, y tiendas online rápidas - Modernizamos tu página web para que incrementes tu capacidad de venta"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => {
          return (
            <ValueCard
              key={i}
              title={service.title}
              description={service.descritpion}
            />
          );
        })}
      </div>
      <ContactForm />
    </VStack>
  );
};

const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-2 border-[#f5f5f5] max-w-[500px] rounded-[22px] p-4 mb-12">
      <p className="header-light mb-2">{title}</p>
      <p className="copy">{description}</p>
    </div>
  );
};

export default Servicios;
