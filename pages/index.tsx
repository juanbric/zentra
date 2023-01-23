import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import MetaTag from "../components/MetaTag";
import QuoteCard from "../components/QuoteCard";
import Schema from "../components/Schema";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import { URL } from "../config";

export default function Home() {
  // Meta
  const imageMeta = "https://i.ibb.co/1sJSnJN/zentra.png";
  const description =
    "Lleva tu negocio al siguiente nivel con nuestra agencia de desarrollo web en Las Palmas de Gran Canaria. Especialistas en crear soluciones personalizadas para impulsar tu crecimiento digital. ";
  const title =
    "zentradev | Agencia de Desarrollo Web | Aumenta tus conversiones";
  const date = new Date();

  // Components
  const headerTitle = "Aumenta tu alcance.";
  const headerSubTitle =
    "Ayudamos a empresarios autónomos y empresas pequeñas a diseñar, crear y optimizar aplicaciones y sitios web, resolviendo lo que les preocupa del negocio a través del código y el diseño.";

  const secondTitle =
    "Nuestra misión es ayudarte a alcanzar el éxito en tu negocio mediante el uso de tecnología.";
  const secondSubTitle =
    "Nuestra agencia ofrece soluciones tecnológicas personalizadas que te ayudarán a aumentar tus ingresos, mejorar tu presencia en línea y realizar tu potencial empresarial.";
  const secondCopy =
    "Entendemos que el mundo empresarial puede ser desafiante y que el espacio digital, con cada nueva tecnología que sale día a día, puede ser abrumador. Pero estamos aquí para ayudarte. En nuestra agencia, nos especializamos en ayudar a empresas como la tuya a navegar el mundo digital con creatividad e innovación. Sabemos que cada negocio es único, por eso ofrecemos soluciones personalizadas para adaptarse a tus necesidades. Te acompañamos en cada paso del camino, desde el diseño y desarrollo de tu sitio o aplicación web hasta la estrategia de SEO y marketing en línea. Juntos podemos alcanzar ese éxito que tanto deseas. ¿Estás listo para dar el salto?";
  const platformHighlights =
    "Impulsa tu negocio a nuevos límites con nuestra ayuda.";
  const featureOneTitle = "Diseñamos";
  const featureOneDescription =
    "Tangilibizamos el valor de tu negocio con sitios y aplicaciones web.";
  const featureTwoTitle = "Desarrollamos";
  const featureTwoDescription =
    "Avanzamos soluciones flexibles y robustas que siguen creciendo.";
  const featureThreeTitle = "Elevamos";
  const featureThreeDescription =
    "Maximizamos el valor de tu negocio mejorando tu presencia online.";
  const jpQuote = `"La filosofía de zentradev se basa en ayudar a las empresas a alcanzar su verdadero potencial en el mundo digital. Creemos en la creatividad y la innovación como herramientas clave para lograrlo, y trabajamos mano a mano con nuestros clientes para asegurarnos de que alcancen sus objetivos."`;

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
        {/* Header */}
        <Banner headerTitle={headerTitle} headerSubTitle={headerSubTitle} />

        {/* Second section */}
        <ThirdSection
          platformHighlights={platformHighlights}
          featureOneTitle={featureOneTitle}
          featureOneDescription={featureOneDescription}
          featureTwoTitle={featureTwoTitle}
          featureTwoDescription={featureTwoDescription}
          featureThreeTitle={featureThreeTitle}
          featureThreeDescription={featureThreeDescription}
        />

        {/* Third section */}
        <SecondSection
          secondTitle={secondTitle}
          secondSubTitle={secondSubTitle}
          secondCopy={secondCopy}
        />

        {/* Quote section */}
        <QuoteCard jpQuote={jpQuote} />

        <ContactForm />
      </main>
    </>
  );
}
