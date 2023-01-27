import ContactForm from "../components/ContactForm";
import MetaTag from "../components/MetaTag";
import Schema from "../components/Schema";

export const Contacto = () => {
  const imageMeta = "https://i.ibb.co/1sJSnJN/zentra.png";
  const description =
    "Lleva tu negocio al siguiente nivel con nuestra agencia de desarrollo web en Las Palmas de Gran Canaria. Especialistas en crear soluciones personalizadas para impulsar tu crecimiento digital. ";
  const title = "Cuéntanos | zentradev | Agencia de Desarrollo Web";
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
      <main className="pt-[100px] pb-[80px]">
        <ContactForm />
      </main>
    </>
  );
};

export default Contacto;
