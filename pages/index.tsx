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
      <Banner />
      <Stack
        direction={["column", "row"]}
        spacing={6}
        className="text-center items-center justify-center copy"
      >
        <p className="rounded-[16px] bg-[#f5f5f5] p-4">
          Creamos páginas informativas, corporativas, y tiendas online rápidas.
        </p>
        <p className="rounded-[16px] bg-[#f5f5f5] p-4">
          Modernizamos tu página web para que incrementes tu capacidad de venta.
        </p>
        <p className="rounded-[16px] bg-[#f5f5f5] p-4">
          Si buscas vender más, convertir mejor, y posicionarte con más eficacia
          en el mundo online, desarrolla tu presencia web con Zentra Dev.
        </p>
        <p className="rounded-[16px] bg-[#f5f5f5] p-4">
          Resultados y satisfacción garantizada.
        </p>
      </Stack>
      <Spacer size={24} />
      <ContactForm />
    </VStack>
  );
}
