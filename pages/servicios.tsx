import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";
import { Stack, VStack } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { URL } from "../config";
import Schema from "../components/Schema";
import Link from "next/link";
import BannerServicios from "../components/BannerServicios";

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
      <main>
        <BannerServicios />

        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <section>
              <div className="flex-col-reverse flex md:grid md:grid-cols-2 pt-[400px] md:pt-[200px]">
                <div className="">
                  <div className="title mb-4 md:mb-8">
                    Diseño y desarrollo de sitios web y aplicaciones
                    personalizadas.
                  </div>
                  <div className="md:block hidden border-t-2 w-1/3 mb-4 mt-12 border-third" />
                  <div className="">
                    Creamos sitios y aplicaciones web atractivos y fáciles de
                    usar que se ajustan a tus necesidades y objetivos
                    específicos.
                  </div>
                </div>
                <div className="flex md:justify-end mb-8 md:mb-0">
                  <img
                    src="/diseno.png"
                    className="border-radius max-h-[350px]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <section>
              <div className="md:grid md:grid-cols-2 pt-[72px] md:pt-[200px]">
                <div className="mb-8 md:mb-0">
                  <img src="/seo.png" className="max-h-[350px] border-radius" />
                </div>
                <div className="flex flex-col items-end justify-start">
                  <div className="title mb-4">
                    Optimización de motores de búsqueda (SEO).
                  </div>
                  <div className="md:block hidden self-start border-t-2 w-1/3 mb-4 mt-8 border-third" />
                  <div className="">
                    Mejoramos de la visibilidad de tu sitio web en los
                    resultados de búsqueda de Google.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <section>
              <div className="flex-col-reverse flex md:grid md:grid-cols-2 py-[72px] md:pb-[170px] md:pt-[200px]">
                <div className="">
                  <div className="title mb-4 md:mb-8">
                    Consultoría y capacitación tecnológica.
                  </div>
                  <div className="md:block hidden border-t-2 w-1/3 mb-4 mt-12 border-third" />
                  <div className="">
                    Te brindamos asesoramiento y proporcionamos habilidades y
                    conocimientos para utilizar eficientemente la tecnología en
                    tu negocio.
                  </div>
                </div>
                <div className="flex md:justify-end mb-8 md:mb-0">
                  <img
                    src="/consultoria.png"
                    className="border-radius max-h-[350px]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <ContactForm />
    </>
  );
};

export default Servicios;
