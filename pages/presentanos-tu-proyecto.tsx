import { VStack } from "@chakra-ui/react";
import { PopupButton } from "@typeform/embed-react";
import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";

const PresentanosTuProyecto = () => {
  return (
    <div className="py-[150px]">
      
      <VStack>
      <MetaTag
        title={"Blog | Zentra Dev"}
        description={
          "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
      <PopupButton
        className="py-3 px-4 copy-bold bg-black text-white rounded-[16px]"
        id="rUQcTGYz"
      >
        ¡Preséntanos tu proyecto!
      </PopupButton>
      </VStack>
    </div>
  );
};

export default PresentanosTuProyecto;
