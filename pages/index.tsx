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
    "Hello, we are Trovali. A new company harnessing the power of AI to streamline student photo management for schools. Our technology provides a clear understanding of which students have granted permission for their pictures to be shared externally, and automatically organizes photos by student identity for easy searchability.";

  const secondTitle =
    "Identify students in pictures, store and find their photos, and track their privacy permissions.";
  const secondSubTitle =
    "Managing student photos can be a challenging task for schools, especially when it comes to the different privacy requirements each student has. That's where our highly customizable, one-of-a-kind solution comes in.";
  const secondCopy =
    "Our platform provides schools with a clear understanding of which students have granted permission for their pictures to be shared externally, ensuring compliance with student privacy laws. Additionally, the platform automatically organizes photos by student identity, making it easy to search and locate any student's photos, saving time and effort for school staff. This not only helps schools to keep student privacy but also makes it easier for staff to manage, organize and access student photos, and help them to use them for educational purposes. Trovali's technology is the ultimate solution for schools looking to efficiently manage student photos while ensuring compliance with student privacy.";
  const platformHighlights =
    "Our native platform offers a seamless, friendly and best-in-class photo management experience, designed to be continously improved and expanded with new features.";
  const featureOneTitle = "Permission tracking";
  const featureOneDescription =
    "Know which students have granted permission for their pictures to be shared externally by checking any picture on our platform";
  const featureTwoTitle = "Seamless photo searchability";
  const featureTwoDescription =
    "Easily locate any student's photos with our platform's automatic way of organizing photos by identity every time staff does an upload.";
  const featureThreeTitle = "Commercial use of photos";
  const featureThreeDescription =
    "Access and compile student photos accumulated throughout the years to use them for commercial purposes such as selling them to student's parents.";

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
      <SecondSection
        secondTitle={secondTitle}
        secondSubTitle={secondSubTitle}
        secondCopy={secondCopy}
      />

      <ThirdSection
        platformHighlights={platformHighlights}
        featureOneTitle={featureOneTitle}
        featureOneDescription={featureOneDescription}
        featureTwoTitle={featureTwoTitle}
        featureTwoDescription={featureTwoDescription}
        featureThreeTitle={featureThreeTitle}
        featureThreeDescription={featureThreeDescription}
      />
      </main>
    </>
  );
}
