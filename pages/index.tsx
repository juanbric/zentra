import Banner from "../components/Banner";
import MetaTag from "../components/MetaTag";
import Schema from "../components/Schema";

export default function Home() {
  return (
    <>
      <Schema
        title={
          "Zentra Dev | Agencia de Desarrollo Web | Aumenta tus conversiones"
        }
        date={undefined}
        image={undefined}
        articleBody={undefined}
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
      />
      <MetaTag
        title={
          "Zentra Dev | Agencia de Desarrollo Web | Aumenta tus conversiones"
        }
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={undefined}
      />
      <div className="py-4 lg:py-8 flex">
        <Banner
          copy={
            "Transforma tu idea en una realidad digital con nuestra agencia de desarrollo web"
          }
        />
      </div>
    </>
  );
}
