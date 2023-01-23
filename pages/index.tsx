import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";
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
    "Identify students in pictures, store and find their photos, and track their privacy permissions.";
  const secondSubTitle =
    "Managing student photos can be a challenging task for schools, especially when it comes to the different privacy requirements each student has. That's where our highly customizable, one-of-a-kind solution comes in.";
  const secondCopy =
    "Our platform provides schools with a clear understanding of which students have granted permission for their pictures to be shared externally, ensuring compliance with student privacy laws. Additionally, the platform automatically organizes photos by student identity, making it easy to search and locate any student's photos, saving time and effort for school staff. This not only helps schools to keep student privacy but also makes it easier for staff to manage, organize and access student photos, and help them to use them for educational purposes. Trovali's technology is the ultimate solution for schools looking to efficiently manage student photos while ensuring compliance with student privacy.";
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

        <ThirdSection
          platformHighlights={platformHighlights}
          featureOneTitle={featureOneTitle}
          featureOneDescription={featureOneDescription}
          featureTwoTitle={featureTwoTitle}
          featureTwoDescription={featureTwoDescription}
          featureThreeTitle={featureThreeTitle}
          featureThreeDescription={featureThreeDescription}
        />
        {/* Second section */}
        <SecondSection
          secondTitle={secondTitle}
          secondSubTitle={secondSubTitle}
          secondCopy={secondCopy}
        />
      </main>
    </>
  );
}
