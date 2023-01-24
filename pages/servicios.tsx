import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";
import { Stack, VStack } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { URL } from "../config";
import Schema from "../components/Schema";
import Link from "next/link";
import BannerServicios from "../components/BannerServicios";

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
  const imageMeta = "https://i.ibb.co/1sJSnJN/zentra.png";
  const description =
    "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información.";
  const title = "Diseño estratégico de plataformas digitales | zentradev";
  const date = new Date();

  return (
    <>
      <Schema
        title={title}
        date={date}
        image={imageMeta}
        articleBody={undefined}
        description={description}
      />
      <MetaTag
        title={title}
        description={description}
        url={URL}
        image={imageMeta}
      />
      <main className="min-h-[1000px]">
        <BannerServicios />
      </main>
      {/* <Banner
        img={"/servicios.png"}
        copy={
          "Creamos páginas informativas, corporativas, y tiendas online rápidas - Modernizamos tu página web para que incrementes tu capacidad de venta"
        }
      /> */}

      {/* <h1 className="copy-bold text-center">
        Algunas de las tecnologías con las que trabajamos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 pb-12">
        <img src="/typescript.png" className="max-w-[150px]" />
        <img src="/tailwind.png" className="max-w-[150px] lg:pt-8" />
        <img src="/next.png" className="max-w-[150px]" />
        <img src="/react.png" className="max-w-[150px]" />
        <img src="/github.png" className="max-w-[150px]" />
        <img src="/contentful.png" className="max-w-[150px]" />
        <img src="/chakra.png" className="max-w-[150px] lg:pt-2" />
        <img src="/node.png" className="max-w-[150px]" />
      </div>

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

      <h1 className="copy-bold text-center">
       Mira el último proyecto que diseñamos y creamos desde cero
      </h1>
      <a
        href="https://www.soltype.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="soltype-logo-black.svg" className="pt-8 pb-14" />
      </a>
      <ContactForm />*/}
    </>
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
