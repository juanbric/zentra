import ContactForm from "../components/ContactForm";
import MetaTag from "../components/MetaTag";
import Spacer from "../components/Spacer";
import { VStack, Stack } from "@chakra-ui/react";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <VStack>
      <MetaTag
        title={
          "Zentra Dev | Agencia de Desarrollo Web | Aumenta tus conversiones"
        }
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
      <Banner img={"/logo-banner.jpg"} copy={"Transforma tu idea en una realidad digital con nuestra agencia de desarrollo web"} />
       <Spacer size={24} />
      <ContactForm />
    </VStack>
  );
}
